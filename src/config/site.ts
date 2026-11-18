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
  role: "Automazioni aziendali e integrazioni tra software",
  tagline: "Automazione dei processi e collegamento tra programmi per PMI.",
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
  { value: "siti-web", label: "Realizzazione o manutenzione di un sito web" },
  { value: "automazione", label: "Automazione di un'attività aziendale" },
  { value: "software", label: "Collegamento tra programmi o software su misura" },
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
    short: "Automatizzo la trascrizione di documenti, l'invio di riepiloghi e altri passaggi ripetitivi.",
    intro:
      "Aprire fatture, trascrivere dati e preparare riepiloghi sono attività necessarie, ma non sempre devono essere svolte a mano. Esamino il processo e realizzo automazioni per i passaggi che seguono regole definite. Per leggere o classificare documenti valuto anche l'intelligenza artificiale, se è adatta al caso.",
    forWho:
      "PMI, uffici amministrativi e professionisti che ripetono ogni giorno le stesse operazioni su dati e documenti.",
    problems: [
      "Ogni fattura va aperta e trascritta a mano.",
      "Promemoria e aggiornamenti dipendono dalla memoria di una persona.",
      "Per preparare un report bisogna ricopiare dati già disponibili.",
      "L'archiviazione dei documenti richiede gli stessi passaggi ogni volta.",
    ],
    examples: [
      "Avvio di un'attività quando arriva un file o un'email.",
      "Lettura dei dati di un PDF e registrazione in Google Sheets.",
      "Invio automatico di notifiche e riepiloghi ai destinatari concordati.",
      "Compilazione di registri senza trascrivere ogni dato.",
      "Lettura o classificazione di documenti con intelligenza artificiale.",
    ],
    process:
      "Parto da un esempio dell'attività e dai documenti che usi. Definisco quali passaggi automatizzare e quali controlli mantenere, poi ti indico costi e limiti. Realizzo il flusso, lo provo con dati reali e ti mostro come verificarne il funzionamento.",
    cta: "Parliamo dell'attività da automatizzare",
  },
  {
    slug: "software",
    title: "Integrazioni tra software e sviluppo su misura",
    short: "Collego i programmi che usi già. Se manca una funzione, valuto uno strumento su misura.",
    intro:
      "Se aggiorni il gestionale e poi devi riportare gli stessi dati in un foglio di calcolo, il lavoro si raddoppia. Verifico come collegare i programmi per trasferire le informazioni senza ricopiarle. Uso le API, cioè i collegamenti messi a disposizione dai software, quando presenti. Se serve una funzione non coperta dagli strumenti esistenti, posso svilupparla su misura.",
    forWho:
      "Aziende che lavorano con più programmi separati o hanno un'esigenza interna che il software attuale non copre.",
    problems: [
      "Lo stesso dato va aggiornato in più programmi.",
      "Un'attività interna dipende da fogli di calcolo difficili da gestire.",
      "Il gestionale attuale va bene, ma manca una funzione importante.",
    ],
    examples: [
      "Sincronizzazione automatica dei dati tra gestionale, fogli di calcolo e altri strumenti.",
      "Collegamenti tra applicazioni attraverso le loro API.",
      "Strumenti interni per cercare nello storico dei preventivi.",
      "Estensioni e personalizzazioni dei programmi già in uso.",
    ],
    process:
      "Verifico prima le possibilità e i limiti dei programmi in uso. Ti propongo un collegamento o uno strumento già disponibile; sviluppo qualcosa di nuovo solo se serve. Concordiamo le funzioni e le verifico con te durante il lavoro.",
    cta: "Dimmi quali programmi usi",
  },
  {
    slug: "siti-web",
    title: "Realizzazione e manutenzione di siti web",
    short: "Realizzo e aggiorno siti per presentare l'attività e rendere facili da trovare i contatti.",
    intro:
      "Accanto alle automazioni, realizzo siti vetrina e informativi e aggiorno quelli esistenti. Mi concentro sulle informazioni che servono ai clienti: cosa fai, dove lavori e come contattarti. Posso occuparmi anche di dominio, hosting e sicurezza.",
    forWho:
      "Attività locali, artigiani e professionisti che hanno bisogno di un sito per presentare il proprio lavoro o di aggiornare quello attuale.",
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
      "Definiamo le informazioni da pubblicare e le pagine necessarie. Realizzo il sito e lo controlliamo insieme prima di pubblicarlo. Manutenzione e aggiornamenti successivi si concordano a parte.",
    cta: "Parliamo del tuo sito",
  },
  {
    slug: "consulenza",
    title: "Consulenza e assistenza informatica",
    short: "Analizzo problemi informatici e ti aiuto a scegliere programmi e interventi adatti al tuo lavoro.",
    intro:
      "Non tutti i problemi richiedono un nuovo programma. Offro consulenza e assistenza per capire cosa non funziona, valutare un acquisto o decidere come organizzare un intervento. Ti spiego le alternative e i loro limiti, senza dare per scontato che tu conosca i dettagli tecnici.",
    forWho:
      "Imprese e professionisti che hanno un problema con computer o programmi, devono scegliere un software o valutare un progetto.",
    problems: [
      "Non sai quale software o servizio scegliere.",
      "Computer, rete o programmi danno problemi e non è chiaro il motivo.",
      "Vuoi migliorare un processo ma non sai cosa sia realistico.",
    ],
    examples: [
      "Valutare strumenti e software prima dell'acquisto.",
      "Analizzare problemi tecnici.",
      "Definire gli interventi necessari per un progetto informatico.",
      "Capire se un processo vale la pena di essere automatizzato.",
    ],
    process:
      "Raccolgo le informazioni sul problema e sugli strumenti che usi. Ti indico le opzioni, i pro e i contro e l'intervento che ritengo opportuno.",
    cta: "Spiegami il problema",
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
    need: "Per preparare centinaia di preventivi diversi, un'impresa edile deve ritrovare le voci dei lavori precedenti e usarle come riferimento per i prezzi.",
    solution:
      "Ho realizzato uno strumento per cercare tra le voci dei vecchi preventivi. La ricerca funziona sia per lettere sia per significato, quindi può trovare descrizioni simili anche se scritte con parole diverse. Le voci recuperate permettono di consultare i prezzi precedenti senza sfogliare tutti i preventivi.",
    image: pricefinderImg.url,
    imageAlt: "Schermata di PriceFinder con i risultati di ricerca tra le voci dei preventivi",
  },
  {
    name: "Sito web I-Prá Savigno",
    type: "Sito web",
    need: "",
    solution:
      "Ho realizzato il sito vetrina di un'azienda agricola a Savigno (BO), consultabile da computer, tablet e cellulare. Il sito presenta l'attività e permette di contattarla tramite un modulo Google e recapiti facili da trovare. Il progetto comprendeva anche hosting, dominio e sicurezza.",
    image: ipraImg.url,
    imageAlt: "Homepage del sito dell'Azienda Agricola I-Prá Savigno",
    imageTop: true,
  },
  {
    name: "Automazione aziendale semplice",
    type: "Automazione dei processi aziendali",
    need: "Le fatture in PDF vanno aperte una per una: bisogna trascriverne i dati in un foglio di calcolo e inviare un riepilogo alla contabilità.",
    solution:
      "Ho realizzato un flusso che monitora una cartella Google Drive. Quando arriva una nuova fattura PDF, ne estrae i dati con l'intelligenza artificiale di OpenAI, li registra in Google Sheets e invia un riepilogo via email al team di contabilità.",
    tech: ["Google Drive", "OpenAI", "Google Sheets", "Gmail"],
    image: automazioneImg.url,
    imageAlt: "Schema del flusso di automazione: cartella Google Drive, lettura della fattura con AI, registrazione in Google Sheets, email alla contabilità",
  },
];

export const publishedProjects = projects.filter((p) => !p.placeholder);
