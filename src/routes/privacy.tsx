import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/ui";
import { site } from "@/config/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy policy — Menetti Diego" },
      { name: "description", content: "Informativa sul trattamento dei dati personali raccolti tramite il sito e il modulo di contatto." },
      { property: "og:title", content: "Privacy policy — Menetti Diego" },
      { property: "og:description", content: "Informativa sul trattamento dei dati personali." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

const sections = [
  { t: "Titolare del trattamento", d: `${site.personName}, ${site.address}. P. IVA ${site.vatNumber}. Email: ${site.email} — Telefono: ${site.phone}.` },
  { t: "Dati raccolti", d: "Tramite il modulo di contatto: nome, azienda (facoltativa), email, servizio di interesse, testo del messaggio ed eventuale preferenza di contatto. Se mi scrivi via email, telefono o WhatsApp tratto i dati che mi comunichi in quel canale." },
  { t: "Finalità e base giuridica", d: "Rispondere alla tua richiesta e fornirti informazioni o preventivi prima di un eventuale incarico. La base giuridica è l'esecuzione di misure precontrattuali adottate su tua richiesta (art. 6, par. 1, lett. b del Regolamento UE 2016/679 - GDPR)." },
  { t: "Natura del conferimento", d: "Nome, email e messaggio sono necessari per poterti rispondere. Senza questi dati non è possibile dare seguito alla richiesta." },
  { t: "Conservazione", d: "I messaggi sono conservati per il tempo necessario a gestire la richiesta e comunque non oltre 24 mesi dall'ultimo contatto, salvo che ne nasca un rapporto professionale: in quel caso i dati sono conservati per il tempo previsto dagli obblighi fiscali e di legge." },
  { t: "Modalità e destinatari", d: "I dati sono trattati con strumenti elettronici e misure di sicurezza adeguate. Non sono venduti né ceduti a terzi per finalità commerciali. Possono essere trattati dai fornitori tecnici che ospitano il sito e archiviano i messaggi, in qualità di responsabili del trattamento. Alcuni fornitori possono trovarsi fuori dall'Unione Europea: in tal caso il trasferimento avviene con le garanzie previste dal GDPR (ad esempio clausole contrattuali standard)." },
  { t: "Cookie", d: "Il sito non utilizza cookie di profilazione, strumenti di analisi statistica o pubblicità. Possono essere usati solo strumenti tecnici strettamente necessari al funzionamento." },
  { t: "Diritti dell'interessato", d: `Puoi chiedere in qualsiasi momento l'accesso ai tuoi dati, la rettifica, la cancellazione, la limitazione del trattamento, la portabilità, oppure opporti al trattamento, scrivendo a ${site.email}. Hai inoltre diritto di proporre reclamo al Garante per la protezione dei dati personali (www.garanteprivacy.it).` },
];

function Privacy() {
  return (
    <>
      <PageIntro title="Privacy policy">Informativa ai sensi degli artt. 13 e 14 del Regolamento UE 2016/679 (GDPR).</PageIntro>
      <section className="container-page max-w-3xl space-y-8 py-14">
        {sections.map((s) => (
          <div key={s.t}>
            <h2 className="text-xl font-semibold">{s.t}</h2>
            <p className="mt-2 text-muted-foreground">{s.d}</p>
          </div>
        ))}
        <p className="text-sm text-muted-foreground">Ultimo aggiornamento: ottobre 2026.</p>
      </section>
    </>
  );
}
