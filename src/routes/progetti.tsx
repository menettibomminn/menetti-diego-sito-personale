import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { publishedProjects } from "@/config/site";
import { CtaBand, PageIntro } from "@/components/site/ui";

export const Route = createFileRoute("/progetti")({
  head: () => ({
    meta: [
      { title: "Progetti — Menetti Diego" },
      { name: "description", content: "Una selezione di lavori realizzati: esigenza iniziale, soluzione e tipologia di intervento." },
      { property: "og:title", content: "Progetti — Menetti Diego" },
      { property: "og:description", content: "Lavori realizzati per imprese e professionisti, pubblicati con autorizzazione." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/progetti" }],
  }),
  component: Progetti,
});

function Progetti() {
  return (
    <>
      <PageIntro eyebrow="Progetti" title="Alcuni lavori realizzati">
        Per ogni progetto trovi l'esigenza di partenza e la soluzione adottata. Pubblico solo lavori per cui ho l'autorizzazione del cliente.
      </PageIntro>
      <section className="container-page py-16">
        {publishedProjects.length === 0 ? (
          <div className="max-w-2xl rounded-xl border bg-card p-8">
            <h2 className="text-2xl font-semibold">Portfolio in preparazione</h2>
            <p className="mt-3 text-muted-foreground">
              Sto raccogliendo le autorizzazioni per pubblicare i progetti. Se vuoi sapere se ho già affrontato un caso simile al tuo, chiedimelo: te ne parlo volentieri nel rispetto della riservatezza dei clienti.
            </p>
          </div>
        ) : (
          <ul className="space-y-10">
            {publishedProjects.map((p, i) => (
              <li key={p.name} className="grid overflow-hidden rounded-xl border bg-card md:grid-cols-2 md:items-center">
                {p.image && (
                  <div className={`p-4 md:py-6 ${i % 2 === 1 ? "md:order-2 md:pl-0 md:pr-6" : "md:pl-6 md:pr-0"}`}>
                    <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                      <img src={p.image} alt={p.imageAlt ?? ""} loading="lazy" className={`size-full object-cover ${p.name.startsWith("PriceFinder") ? "object-center" : "object-top"}`} />
                    </div>
                  </div>
                )}
                <div className="p-6 md:p-10">
                  <p className="text-sm font-medium text-primary">{p.type}</p>
                  <h2 className="mt-1 text-2xl font-semibold">{p.name}</h2>
                  {p.need && <p className="mt-4 text-muted-foreground">{p.need}</p>}
                  <p className="mt-4 whitespace-pre-line text-muted-foreground">{p.solution}</p>
                  {p.tech && <p className="mt-3 text-sm text-muted-foreground">Tecnologie: {p.tech.join(", ")}</p>}
                  {p.url && (
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 items-center gap-1 font-semibold text-primary hover:underline">
                      Visita il progetto <ExternalLink className="size-4" aria-hidden />
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
      <CtaBand title="Hai un'esigenza simile?" text="Raccontami di cosa ti occupi e cosa vorresti migliorare." />
    </>
  );
}
