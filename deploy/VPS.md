# Pubblicazione su VPS — Menetti Diego

Il sito mantiene tutte le pagine e il pulsante verso Google Moduli. Non richiede
la pubblicazione su Lovable, un database locale o chiavi private per le funzioni
attualmente visibili. Le risposte restano in Google Moduli: non vengono salvate sul VPS.

## Requisiti

- VPS Linux con Docker Engine e Docker Compose v2.
- Codice completo del repository (tramite esportazione/GitHub), incluso `bun.lock`.
- Per HTTPS: dominio con record DNS A verso il VPS; aggiungi AAAA solo se il VPS
  ha IPv6 configurato. Porte 80 e 443 libere e aperte nel firewall.
- Accesso Internet durante la compilazione per scaricare le dipendenze e le immagini.

### Foto e immagini incluse

`build:vps` scarica le immagini originali prima di compilare e le include
nell'output. Sul VPS le immagini sono servite localmente, senza richieste a
Lovable da parte dei visitatori. I file generati in `public/__l5e/` sono esclusi
dal repository. Il download usa l'attuale indirizzo del progetto solo durante
la compilazione: conserva un backup delle immagini o dell'intera `.output`.
Se la sorgente cambia, imposta `VPS_ASSET_ORIGIN` con l'indirizzo HTTPS che
serve gli originali. Una risposta non valida interrompe la compilazione.

## Avvio con HTTPS automatico

Dalla cartella del progetto sul VPS:

```sh
cp .env.vps.example deploy/site.env
```

Imposta in `deploy/site.env` il tuo dominio reale al posto di `example.com`, poi:

```sh
docker compose --env-file deploy/site.env --profile https up -d --build
docker compose --env-file deploy/site.env --profile https ps
docker compose --env-file deploy/site.env --profile https logs --tail=100
```

Caddy richiede e rinnova il certificato HTTPS automaticamente. Non eliminare
i volumi `caddy_data` e `caddy_config` durante gli aggiornamenti.
Se il VPS ospita già altri siti con un proxy, non avviare il profilo `https`:

```sh
docker compose --env-file deploy/site.env up -d --build site
```

Il sito è disponibile al proxy già installato su `http://127.0.0.1:3000`.
Non aprire la porta 3000 al pubblico. Se è già occupata, cambia solo il primo
`3000` nella voce `ports` di `compose.yaml` e aggiorna il tuo proxy.

## Aggiornamenti e verifica

Riporta sul VPS il codice aggiornato, poi ripeti il comando `up -d --build`.
Le modifiche fatte nell'editor non vengono trasferite automaticamente al VPS.

```sh
curl -f http://127.0.0.1:3000/contatti
```

Apri dal dominio Home, Servizi, Progetti, Chi sono, Contatti e Privacy. Ricarica
direttamente `/progetti` e `/contatti`, verifica foto e logo e apri il pulsante
"Apri il modulo di contatto": deve portare al tuo Google Modulo in una nuova scheda.
Per verificare la raccolta delle richieste, invia una prova dal modulo e controlla
la scheda Risposte in Google Moduli.

## Alternativa senza Docker

Installa Node.js 22 LTS e Bun 1, quindi dalla cartella del progetto:

```sh
bun install --frozen-lockfile
bun run build:vps
HOST=127.0.0.1 PORT=3000 bun run start
```

L'output da distribuire è **l'intera cartella `.output`**, non solo le pagine o
`index.mjs`. Usa un gestore di processi (ad esempio systemd) per avviarlo al boot
e riavviarlo in caso di errore. Metti Nginx/Caddy davanti alla porta locale per
il dominio e HTTPS. `vite preview` e `bun run dev` non sono server di produzione.

## Servizi esterni e sicurezza

- Google Moduli resta esterno al VPS, così come i font Google già usati dal sito; le foto sono incluse nell'output VPS.
- Il vecchio codice di raccolta nel database è inutilizzato dalla pagina Contatti:
  non attivarlo senza configurare e verificare separatamente il relativo servizio.
- Il Dockerfile esclude `.env` e chiavi private; non aggiungerle all'immagine.
- Un cambio di hosting può richiedere una revisione dell'informativa Privacy
  per il fornitore VPS e i suoi eventuali log: verifica i dati reali prima di modificare il testo.

La configurazione è predisposta nel progetto; il collegamento del dominio,
il certificato e l'avvio sul VPS vanno verificati sul server effettivo.