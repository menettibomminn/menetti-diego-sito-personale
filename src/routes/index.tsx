import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Globe, Repeat, Puzzle, LifeBuoy, MessageCircle } from "lucide-react";
import { services, site, publishedProjects, type ServiceSlug } from "@/config/site";
import { CtaBand, PrimaryLink } from "@/components/site/ui";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Automazioni aziendali e integrazione software a Bologna e Modena | Menetti Diego" },
      { name: "description", content: "Consulente informatico freelance: automatizzo attività ripetitive, collego i software che usi già e realizzo siti web per aziende. Bologna, Modena e da remoto." },
      { property: "og:title", content: "Menetti Diego — Automazioni aziendali e integrazione tra software" },
      { property: "og:description", content: "Meno lavoro manuale e programmi che si parlano tra loro. Consulenza informatica freelance tra Bologna e Modena." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const needs: { icon: typeof Globe; title: string; text: string; slug: ServiceSlug; cta: string }[] = [
  { icon: Repeat, slug: "automazione", title: "Perdo tempo con attività ripetitive.", text: "Copiare dati da un programma all'altro, trascrivere documenti, mandare sempre le stesse email, preparare gli stessi report. Sono passaggi che spesso si possono automatizzare, almeno in parte.", cta: "Descrivimi l'attività" },
  { icon: Puzzle, slug: "software", title: "I miei programmi non si parlano tra loro.", text: "Gestionale, fogli di calcolo, posta, servizi online: se i dati vanno ricopiati a mano tra uno e l'altro, possiamo vedere come collegarli. Se manca proprio uno strumento, posso realizzarlo su misura.", cta: "Parliamo dei tuoi programmi" },
  { icon: Globe, slug: "siti-web", title: "Voglio un sito web o migliorare quello che ho già.", text: "Per presentare la tua attività, mostrare i servizi e ricevere richieste di contatto. Posso seguire tutto io, compresi dominio e hosting, con costi chiari fin dall'inizio.", cta: "Parliamo del tuo sito" },
  { icon: LifeBuoy, slug: "consulenza", title: "Ho un problema informatico o devo scegliere uno strumento.", text: "Per capire cosa non funziona, confrontare le alternative e decidere con più informazioni in mano.", cta: "Chiedi un confronto" },
];

const steps = [
  { title: "Ascolto e analisi", text: "Mi racconti come lavori oggi e cosa vorresti cambiare. Faccio domande e cerco di capire dove si perde davvero tempo." },
  { title: "Proposta", text: "Ti presento una soluzione proporzionata al problema, con costi, tempi e limiti definiti prima di iniziare. Se non conviene farla, te lo dico." },
  { title: "Realizzazione e supporto", text: "Realizzo quanto concordato, lo proviamo insieme, ti mostro come usarlo e resto disponibile per il supporto previsto." },
];

function Home() {
  return (
    <>
      <section className="border-b">
        <div className="container-page py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">{site.role}</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold md:text-6xl">Automazioni aziendali e software che lavorano insieme.</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Sono Diego, consulente informatico freelance. Aiuto piccole e medie imprese a ridurre il lavoro manuale: automatizzo le attività ripetitive, collego i programmi che usano già e, quando serve, realizzo siti web o strumenti su misura.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <PrimaryLink servizio="automazione">Descrivimi un processo che ti fa perdere tempo</PrimaryLink>
            <Link to="/progetti" className="inline-flex min-h-11 items-center gap-2 px-2 font-semibold text-primary hover:underline">
              Guarda cosa ho realizzato <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">Lavoro in presenza con aziende di Bologna, Modena e dintorni, e da remoto in tutta Italia.</p>
        </div>
      </section>

      <section aria-labelledby="bisogno" className="bg-secondary">
        <div className="container-page py-16">
          <h2 id="bisogno" className="text-3xl font-semibold md:text-4xl">Di cosa hai bisogno?</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">Scegli la situazione più vicina alla tua. Non serve conoscere i termini tecnici.</p>
          <ul className="mt-10 grid gap-5 md:grid-cols-2">
            {needs.map((n) => (
              <li key={n.slug} className="flex flex-col rounded-xl border bg-card p-6">
                <div className="flex items-center gap-3">
                  <n.icon className="size-6 shrink-0 text-primary" aria-hidden />
                  <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                    {({ "siti-web": "Siti web", automazione: "Automazioni", software: "Integrazioni e software", consulenza: "Consulenza" } as Record<string, string>)[n.slug]}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-semibold">{n.title}</h3>
                <p className="mt-2 flex-1 text-muted-foreground">{n.text}</p>
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                  <Link to="/contatti" search={{ servizio: n.slug }} className="inline-flex min-h-11 items-center gap-2 font-semibold text-primary hover:underline">
                    {n.cta} <ArrowRight className="size-4" aria-hidden />
                  </Link>
                  <Link to="/servizi" hash={n.slug} className="inline-flex min-h-11 items-center text-sm text-muted-foreground underline-offset-4 hover:underline">
                    Leggi i dettagli
                  </Link>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-4 rounded-xl border-2 border-dashed border-primary/40 bg-card p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <MessageCircle className="mt-1 size-6 shrink-0 text-primary" aria-hidden />
              <div>
                <p className="text-lg font-semibold">Non sai da dove cominciare? Raccontami la tua necessità.</p>
                <p className="text-muted-foreground">Descrivi la situazione con parole tue: ti aiuto io a capire cosa serve.</p>
              </div>
            </div>
            <div className="shrink-0"><PrimaryLink servizio="non-so">Scrivimi</PrimaryLink></div>
          </div>
        </div>
      </section>

      <section aria-labelledby="servizi">
        <div className="container-page py-16">
          <h2 id="servizi" className="text-3xl font-semibold md:text-4xl">I servizi, in breve</h2>
          <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {services.map((s) => (
              <div key={s.slug} className="border-l-2 border-highlight pl-5">
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-muted-foreground">{s.short}</p>
                <Link to="/servizi" hash={s.slug} className="mt-2 inline-flex min-h-11 items-center gap-1 font-semibold text-primary hover:underline">
                  Come funziona <ArrowRight className="size-4" aria-hidden />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="metodo" className="bg-ink text-ink-foreground">
        <div className="container-page py-16">
          <h2 id="metodo" className="text-3xl font-semibold md:text-4xl">Come lavoro</h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title}>
                <span className="font-display text-3xl font-semibold text-highlight">{i + 1}</span>
                <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 opacity-85">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {publishedProjects.length > 0 && (
        <section aria-labelledby="progetti">
          <div className="container-page py-16">
            <h2 id="progetti" className="text-3xl font-semibold md:text-4xl">Alcuni progetti reali</h2>
            <ul className="mt-8 grid gap-6 md:grid-cols-3">
              {publishedProjects.slice(0, 3).map((p) => (
                <li key={p.name} className="rounded-xl border bg-card p-5">
                  <p className="text-sm text-primary">{p.type}</p>
                  <h3 className="mt-1 text-lg font-semibold">{p.name}</h3>
                  <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{p.need || p.solution}</p>
                </li>
              ))}
            </ul>
            <Link to="/progetti" className="mt-6 inline-flex min-h-11 items-center gap-1 font-semibold text-primary hover:underline">Vedi tutti i progetti <ArrowRight className="size-4" aria-hidden /></Link>
          </div>
        </section>
      )}

      <section aria-labelledby="chi">
        <div className="container-page grid gap-8 py-16 md:grid-cols-[1fr_2fr] md:items-center">
          <h2 id="chi" className="text-3xl font-semibold md:text-4xl">Chi sono</h2>
          <div>
            <p className="text-lg text-muted-foreground">
              Sono Diego Menetti, consulente informatico e sviluppatore freelance. Prima di proporre qualsiasi cosa cerco di capire come lavori, poi ti suggerisco l'intervento più semplice che risolve il problema, senza strumenti inutilmente complessi o costosi. Parli sempre direttamente con me, dall'analisi alla consegna.
            </p>
            <Link to="/chi-sono" className="mt-4 inline-flex min-h-11 items-center gap-1 font-semibold text-primary hover:underline">Come lavoro e chi sono <ArrowRight className="size-4" aria-hidden /></Link>
          </div>
        </div>
      </section>

      <CtaBand title="Hai un processo manuale che ti fa perdere tempo?" text="Raccontami come lo gestisci oggi. Lo esaminiamo insieme e ti dico se e come si può semplificare." cta="Raccontami il tuo processo" />
    </>
  );
}
