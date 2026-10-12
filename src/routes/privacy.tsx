import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/ui";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy policy — Diego Menetti" },
      { name: "description", content: "Informativa sul trattamento dei dati personali raccolti tramite il sito e il modulo di contatto." },
      { property: "og:title", content: "Privacy policy — Diego Menetti" },
      { property: "og:description", content: "Informativa sul trattamento dei dati personali." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

// STRUTTURA DA COMPLETARE E FAR VERIFICARE prima della pubblicazione.
const sections = [
  { t: "Titolare del trattamento", d: "Diego Menetti — indirizzo, P. IVA ed email di contatto da completare." },
  { t: "Dati raccolti", d: "Tramite il modulo di contatto: nome, azienda (facoltativa), email, servizio di interesse, testo del messaggio e preferenza di contatto." },
  { t: "Finalità e base giuridica", d: "Rispondere alla tua richiesta e fornire eventuali informazioni precontrattuali. Da completare con la base giuridica applicabile." },
  { t: "Conservazione", d: "Periodo di conservazione dei messaggi da definire." },
  { t: "Fornitori e destinatari", d: "Fornitori dei servizi di hosting e archiviazione dei dati utilizzati dal sito: da elencare." },
  { t: "Cookie", d: "Il sito non utilizza cookie di profilazione né strumenti di tracciamento o pubblicità. Da verificare e aggiornare se in futuro venissero aggiunti." },
  { t: "Diritti dell'interessato", d: "Accesso, rettifica, cancellazione, limitazione, opposizione e reclamo al Garante: da completare con le modalità di esercizio." },
];

function Privacy() {
  return (
    <>
      <PageIntro title="Privacy policy">
        <span className="rounded bg-highlight/30 px-2 py-1 text-base text-foreground">
          Bozza strutturale: il testo definitivo deve essere completato e verificato prima della pubblicazione.
        </span>
      </PageIntro>
      <section className="container-page max-w-3xl space-y-8 py-14">
        {sections.map((s) => (
          <div key={s.t}>
            <h2 className="text-xl font-semibold">{s.t}</h2>
            <p className="mt-2 text-muted-foreground">{s.d}</p>
          </div>
        ))}
      </section>
    </>
  );
}
