import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { services } from "@/config/site";
import { CtaBand, PageIntro, PrimaryLink } from "@/components/site/ui";

export const Route = createFileRoute("/servizi")({
  head: () => ({
    meta: [
      { title: "Servizi: automazione processi, integrazione software e siti web | Menetti Diego" },
      { name: "description", content: "Realizzo automazioni e collegamenti tra i programmi delle PMI. Offro anche sviluppo su misura, siti web e consulenza: interventi, esempi e modalità di lavoro." },
      { property: "og:title", content: "Servizi — Automazione, integrazioni e siti web | Menetti Diego" },
      { property: "og:description", content: "Dalla trascrizione delle fatture ai dati da aggiornare in più programmi: come intervengo sui processi aziendali e quali altri servizi offro." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/servizi" }],
  }),
  component: Servizi,
});

function Servizi() {
  return (
    <>
      <PageIntro eyebrow="Servizi" title="Automazioni aziendali e integrazioni tra software">
        Il mio lavoro principale è automatizzare operazioni ripetitive e collegare i programmi già in uso nelle aziende. A questo affianco sviluppo software su misura, consulenza informatica e siti web. L'intervento dipende dal problema: non sempre serve costruire qualcosa di nuovo.
      </PageIntro>
      <nav aria-label="Indice servizi" className="border-b bg-secondary">
        <ul className="container-page flex flex-wrap gap-x-6 gap-y-2 py-4 text-sm">
          {services.map((s) => (
            <li key={s.slug}><a href={`#${s.slug}`} className="inline-flex min-h-11 items-center font-medium text-primary hover:underline">{s.title}</a></li>
          ))}
        </ul>
      </nav>
      {services.map((s, i) => (
        <section key={s.slug} id={s.slug} aria-labelledby={`${s.slug}-t`} className={`scroll-mt-20 ${i % 2 ? "bg-secondary" : ""}`}>
          <div className="container-page grid gap-10 py-16 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <p className="font-display text-sm font-semibold text-primary">0{i + 1}</p>
              <h2 id={`${s.slug}-t`} className="mt-1 text-3xl font-semibold">{s.title}</h2>
              <p className="mt-4 text-lg text-muted-foreground">{s.intro}</p>
              <h3 className="mt-8 text-lg font-semibold">A chi si rivolge</h3>
              <p className="mt-2 text-muted-foreground">{s.forWho}</p>
              <div className="mt-8"><PrimaryLink servizio={s.slug}>{s.cta}</PrimaryLink></div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold">Problemi che può risolvere</h3>
                <ul className="mt-3 space-y-2">
                  {s.problems.map((p) => <li key={p} className="text-muted-foreground">— {p}</li>)}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Esempi di interventi</h3>
                <ul className="mt-3 space-y-2">
                  {s.examples.map((e) => (
                    <li key={e} className="flex gap-2"><Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden />{e}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Come si svolge il lavoro</h3>
                <p className="mt-2 text-muted-foreground">{s.process}</p>
              </div>
            </div>
          </div>
        </section>
      ))}
      <CtaBand title="Da quale problema partiamo?" text="Puoi descrivermi un passaggio ripetitivo, due programmi da collegare o una difficoltà informatica. Valutiamo l'intervento prima di scegliere uno strumento." cta="Scrivimi il problema" />
    </>
  );
}
