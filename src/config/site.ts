import pricefinderImg from "@/assets/pricefinder.jpg.asset.json";
import ipraImg from "@/assets/ipra-savigno.png.asset.json";
import automazioneImg from "@/assets/automazione-n8n.jpg.asset.json";

/**
 * CONFIGURAZIONE CENTRALE DEL SITO
 * Modifica qui recapiti, dati professionali, servizi e progetti.
 * I campi marcati "DA COMPLETARE" vanno sostituiti prima della pubblicazione.
 */

export const site = {
  name: "Menetti Diego",
  /** Nome della persona (usato dove serve il nome personale) */
  personName: "Diego Menetti",
  role: "CONSULENZA INFORMATICA, INTELLIGENZA ARTIFICIALE, SVILUPPO SOFTWARE, AUTOMAZIONE E SITI WEB.",
  tagline: "Soluzioni informatiche per lavorare meglio.",
  area: "Bologna e Modena in presenza - tutta Italia da remoto.",
  // Lascia stringa vuota per nascondere il recapito dal sito.
  email: "diego.menetti.05@gmail.com",
  pec: "diego.menetti@pec.it",
  phone: "+39 338 477 2858",
  /** Numero WhatsApp in formato internazionale senza + e spazi; vuoto per nascondere */
  whatsapp: "393384772858",
  vatNumber: "04404051205",
  address: "Castello di Serravalle, Valsamoggia (BO)",
  social: [] as { label: string; href: string }[],
  /** Link al modulo Google usato nella pagina Contatti */
  contactFormUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSfok7B7ohBTCdSbSWAkfmouZaS8vuumkS-QcRNvP6KPA3lvKw/viewform?usp=publish-editor",
};

export type ServiceSlug = "siti-web" | "automazione" | "software" | "consulenza" | "non-so";

export const serviceOptions: { value: ServiceSlug; label: string }[] = [
  { value: "non-so", label: "Non so quale scegliere" },
  { value: "siti-web", label: "Sito web e presenza digitale" },
  { value: "automazione", label: "Automazione e intelligenza artificiale" },
  { value: "software", label: "Software su misura e integrazioni" },
  { value: "consulenza", label: "Consulenza e assistenza informatica" },
];

export type Service = {
  slug: Exclude<ServiceSlug, "non-so">;
  title: string;
  short: string;
  intro: string;
  forWho: string;
  problems: string[];
  examples: string[];
  process: string;
  cta: string;
};

export const services: Service[] = [
  {
    slug: "automazione",
    title: "Automazione dei processi aziendali",
    short: "Tolgo dal lavoro quotidiano i passaggi manuali che si ripetono sempre uguali.",
    intro:
      "Se ogni settimana qualcuno copia dati da un programma all'altro, aggiorna a mano un foglio di calcolo o prepara sempre lo stesso riepilogo, è probabile che una parte di quel lavoro si possa automatizzare. Analizzo le attività ripetitive e i processi aziendali, e valuto come automatizzarle. Propongo l'intelligenza artificiale solo quando porta un vantaggio concreto e tangibile, non come soluzione universale.",
    forWho:
      "Piccole e medie imprese, uffici amministrativi e professionisti che dedicano ore a operazioni manuali: inserimento dati, notifiche, report, archiviazione di documenti.",
    problems: [
      "Gli stessi dati vengono inseriti più volte in strumenti diversi.",
      "Promemoria e aggiornamenti dipendono da qualcuno che se ne ricordi.",
      "I report richiedono ore di copia e incolla.",
      "Documenti come fatture o moduli vanno letti e trascritti a mano.",
    ],
    examples: [
      "Flussi di lavoro che partono da soli quando arriva un file o un'email.",
      "Estrazione di dati da documenti PDF e registrazione in un foglio Google.",
      "Notifiche e riepiloghi inviati in automatico alle persone giuste.",
      "Riduzione degli inserimenti manuali di dati.",
      "Uso dell'AI per leggere o classificare documenti, quando ha senso.",
    ],
    process:
      "Mi racconti come gestisci oggi l'attività, passo per passo. Individuo i passaggi che si possono automatizzare e ti propongo una soluzione con costi e limiti chiari prima di iniziare. Poi la costruisco, la provo con dati reali e ti spiego come controllarla.",
    cta: "Descrivimi un'attività da automatizzare",
  },
  {
    slug: "software",
    title: "Integrazione tra software e strumenti su misura",
    short: "Faccio comunicare i programmi che usi già, o creo lo strumento che manca.",
    intro:
      "Molte aziende usano un gestionale, un foglio di calcolo, la posta e qualche servizio online che non si parlano tra loro. Collego queste applicazioni, spesso tramite API, in modo che i dati passino da uno strumento all'altro senza essere ricopiati. Quando nessun programma esistente risponde bene a un'esigenza, realizzo uno strumento dedicato.",
    forWho:
      "Aziende con esigenze specifiche che i software standard coprono solo in parte, o che lavorano con più programmi scollegati.",
    problems: [
      "Usi più programmi che non si parlano tra loro.",
      "Un'attività interna si gestisce ancora con fogli di calcolo complicati.",
      "Il gestionale attuale va bene, ma manca una funzione importante.",
    ],
    examples: [
      "Sincronizzazione automatica dei dati tra gestionale, fogli di calcolo e altri strumenti.",
      "Collegamenti tramite API tra applicazioni aziendali.",
      "Piccoli strumenti interni, come una ricerca veloce nello storico dei preventivi.",
      "Estensioni e personalizzazioni di sistemi esistenti.",
    ],
    process:
      "Prima verifico se esiste già una soluzione adatta o se i tuoi programmi permettono di essere collegati. Se serve sviluppare, definiamo insieme le funzioni essenziali e procedo per fasi, con verifiche intermedie.",
    cta: "Parliamo dei programmi da collegare",
  },
  {
    slug: "siti-web",
    title: "Realizzazione e manutenzione di siti web",
    short: "Siti per aziende e attività locali, chiari da leggere anche da cellulare.",
    intro:
      "Realizzo siti vetrina e informativi per aziende, rinnovo siti esistenti e, se serve, mi occupo della manutenzione. Posso seguire anche la parte meno visibile: dominio, hosting e sicurezza, così hai un unico riferimento.",
    forWho:
      "Attività locali, artigiani, professionisti e piccole imprese che vogliono farsi trovare e presentare bene il proprio lavoro.",
    problems: [
      "Il sito è datato o difficile da usare da smartphone.",
      "I clienti non trovano facilmente contatti, orari o servizi.",
      "Non hai ancora un sito o hai solo una pagina social.",
    ],
    examples: [
      "Presentare servizi e prodotti in modo ordinato.",
      "Rendere più semplice trovare contatti e informazioni.",
      "Mostrare fotografie e lavori realizzati.",
      "Gestire dominio, hosting e aggiornamenti.",
    ],
    process:
      "Partiamo da cosa deve ottenere il sito, definiamo pagine e contenuti, poi lo realizzo e lo pubblichiamo. Gli aggiornamenti successivi si concordano a parte.",
    cta: "Parliamo del tuo sito",
  },
  {
    slug: "consulenza",
    title: "Consulenza e assistenza informatica",
    short: "Un confronto per capire il problema, valutare le alternative e scegliere.",
    intro:
      "A volte non serve sviluppare nulla: serve capire cosa non funziona o quale strumento scegliere. Ti aiuto ad analizzare problemi hardware o software, a confrontare le alternative e a individuare la soluzione più adatta alla tua situazione.",
    forWho:
      "Chi ha un problema informatico, deve scegliere uno strumento o vuole pianificare un progetto senza sapere da dove partire.",
    problems: [
      "Non sai quale software o servizio scegliere.",
      "Computer, rete o programmi danno problemi e non è chiaro il motivo.",
      "Vuoi migliorare un processo ma non sai cosa sia realistico.",
    ],
    examples: [
      "Valutare strumenti e software prima dell'acquisto.",
      "Analizzare problemi tecnici.",
      "Pianificare piccoli progetti digitali.",
      "Capire se un processo vale la pena di essere automatizzato.",
    ],
    process:
      "Mi racconti la situazione, raccolgo le informazioni necessarie e ti restituisco un quadro chiaro delle opzioni, con pro e contro di ciascuna.",
    cta: "Chiedi un confronto",
  },
];

export type Project = {
  /** true = progetto segnaposto, NON viene mostrato in produzione finché non lo sostituisci */
  placeholder?: boolean;
  name: string;
  type: string;
  need: string;
  solution: string;
  tech?: string[];
  image?: string;
  imageAlt?: string;
  /** true = mostra la parte alta dell'immagine (taglia sotto); altrimenti centrata */
  imageTop?: boolean;
  url?: string;
};

/**
 * PORTFOLIO — aggiungi qui i progetti reali, solo se autorizzati dal cliente.
 * Finché l'elenco contiene solo segnaposto, il sito mostra un messaggio neutro.
 */
export const projects: Project[] = [
  {
    name: "PriceFinder - strumento di ricerca",
    type: "Software su misura",
    need: "Il problema: un'impresa edile prepara centinaia di preventivi sempre diversi e, per stabilire un prezzo, deve ritrovare voci simili in quelli vecchi.",
    solution:
      "Un piccolo tool costruito e pensato per quelle aziende, in questo caso edile, che devono produrre centinaia di preventivi sempre diversi e hanno bisogno di visualizzare vecchie voci di preventivi per stabilire un prezzo. La ricerca funziona sia per lettere, sia per significato: trova anche voci scritte con parole diverse ma simili. Così si ottengono le righe dei preventivi senza sfogliarli tutti a mano.",
    image: pricefinderImg.url,
    imageAlt: "Schermata di PriceFinder con i risultati di ricerca tra le voci dei preventivi",
  },
  {
    name: "Sito web I-Prá Savigno",
    type: "Sito web",
    need: "",
    solution:
      "Sito web vetrina per una azienda agricola situata a Savigno (BO), visualizzabile comodamente da PC, tablet e cellulare. Sito che valorizza l'azienda e rende accessibile il contatto tra le parti tramite form Google e recapiti facili da trovare.\nOvviamente hosting, dominio e sicurezza sono stati compresi nel progetto da me svolto.",
    image: ipraImg.url,
    imageAlt: "Homepage del sito dell'Azienda Agricola I-Prá Savigno",
    imageTop: true,
  },
  {
    name: "Automazione aziendale semplice",
    type: "Automazione e intelligenza artificiale",
    need: "Il problema: le fatture in PDF arrivano in una cartella e qualcuno deve aprirle una per una, copiare i dati in un foglio di calcolo e avvisare la contabilità.",
    solution:
      "Monitora una cartella Google Drive per nuovi file, estrae automaticamente i dati dalle fatture in formato PDF tramite Intelligenza Artificiale (OpenAI), registra le informazioni in Google Sheets e invia un riepilogo via email al team di contabilità.\nIn pratica: si carica la fattura nella cartella e il resto avviene da solo, senza trascrizioni a mano.",
    tech: ["Google Drive", "OpenAI", "Google Sheets", "Gmail"],
    image: automazioneImg.url,
    imageAlt: "Schema del flusso di automazione: cartella Google Drive, lettura della fattura con AI, registrazione in Google Sheets, email alla contabilità",
  },
];

export const publishedProjects = projects.filter((p) => !p.placeholder);
