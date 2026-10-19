import pricefinderImg from "@/assets/pricefinder.jpg.asset.json";
import ipraImg from "@/assets/ipra-savigno.png.asset.json";

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
    slug: "siti-web",
    title: "Siti web e presenza digitale",
    short: "Siti vetrina chiari, rinnovo di siti esistenti e aggiornamenti concordati.",
    intro:
      "Realizzo siti vetrina e informativi, rinnovo siti esistenti e, se serve, mi occupo di manutenzione e aggiornamenti secondo quanto concordato.",
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
      "Migliorare l'esperienza da smartphone.",
      "Mantenere aggiornati contenuti e informazioni.",
    ],
    process:
      "Partiamo da cosa deve ottenere il sito, definiamo pagine e contenuti, poi lo realizzo e lo pubblichiamo. Gli aggiornamenti successivi si concordano a parte.",
    cta: "Parliamo del tuo sito",
  },
  {
    slug: "automazione",
    title: "Automazione e intelligenza artificiale",
    short: "Meno lavoro manuale e ripetitivo, con strumenti adatti al tuo modo di lavorare.",
    intro:
      "Analizzo le attività ripetitive e valuto come automatizzarle. Propongo l'intelligenza artificiale solo quando porta un vantaggio concreto, non come soluzione universale.",
    forWho:
      "Chi perde tempo copiando dati fra programmi, inviando notifiche a mano o preparando sempre gli stessi report.",
    problems: [
      "Gli stessi dati vengono inseriti più volte in strumenti diversi.",
      "Promemoria e aggiornamenti dipendono da qualcuno che se ne ricordi.",
      "I report richiedono ore di copia e incolla.",
    ],
    examples: [
      "Collegare strumenti aziendali.",
      "Automatizzare notifiche e aggiornamenti.",
      "Ridurre inserimenti manuali di dati.",
      "Organizzare flussi di lavoro.",
      "Valutare l'integrazione dell'AI in processi specifici.",
    ],
    process:
      "Osserviamo insieme il processo attuale, individuo i passaggi automatizzabili e ti propongo una soluzione con costi e limiti chiari prima di iniziare.",
    cta: "Analizziamo il tuo processo",
  },
  {
    slug: "software",
    title: "Software su misura e integrazioni",
    short: "Strumenti dedicati e collegamenti fra le applicazioni che usi già.",
    intro:
      "Quando i programmi disponibili non rispondono bene alle tue esigenze, posso realizzare strumenti su misura o far comunicare le applicazioni che già utilizzi.",
    forWho:
      "Aziende con esigenze specifiche che i software standard coprono solo in parte.",
    problems: [
      "Usi più programmi che non si parlano tra loro.",
      "Un'attività interna si gestisce ancora con fogli di calcolo complicati.",
      "Il gestionale attuale va bene, ma manca una funzione importante.",
    ],
    examples: [
      "Strumenti interni per attività specifiche.",
      "Integrazioni tra software.",
      "Piccoli strumenti dedicati che semplificano le operazioni.",
      "Estensioni e personalizzazioni di sistemi esistenti.",
    ],
    process:
      "Prima verifico se esiste già una soluzione adatta. Se serve sviluppare, definiamo insieme le funzioni essenziali e procedo per fasi, con verifiche intermedie.",
    cta: "Descrivimi la tua esigenza",
  },
  {
    slug: "consulenza",
    title: "Consulenza e assistenza informatica",
    short: "Un confronto per capire il problema, valutare le alternative e scegliere.",
    intro:
      "Ti aiuto ad analizzare esigenze e problemi tecnologici, hardware o software, a valutare le alternative e a individuare la soluzione più appropriata.",
    forWho:
      "Chi ha un problema informatico, deve scegliere uno strumento o vuole pianificare un progetto senza sapere da dove partire.",
    problems: [
      "Non sai quale software o servizio scegliere.",
      "Computer, rete o programmi danno problemi e non è chiaro il motivo.",
      "Vuoi migliorare un processo ma non sai cosa sia realistico.",
    ],
    examples: [
      "Valutare strumenti e software.",
      "Analizzare problemi tecnici.",
      "Pianificare piccoli progetti digitali.",
      "Individuare opportunità di miglioramento dei processi.",
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
    need: "",
    solution:
      "Un piccolo tool costruito e pensato per quelle aziende, in questo caso edile, che devono produrre centinaia di preventivi sempre diversi e hanno bisogno di visualizzare vecchie voci di preventivi per stabilire un prezzo. La ricerca di parole per lettere e campo semantico permette di ottenere le righe dei preventivi senza sfogliarli tutti a mano.",
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
    imageAlt: "Homepage del sito dell'Azienda Agricola I-Prà Savigno",
  },
];

export const publishedProjects = projects.filter((p) => !p.placeholder);
