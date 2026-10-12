import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { publishedProjects } from "@/config/site";
import { CtaBand, PageIntro } from "@/components/site/ui";

export const Route = createFileRoute("/progetti")({
  head: () => ({
    meta: [
      { title: "Progetti — Diego Menetti" },
      { name: "description", content: "Una selezione di lavori realizzati: esigenza iniziale, soluzione e tipologia di intervento." },
      { property: "og:title", content: "Progetti — Diego Menetti" },
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
      <PageIntro eyebrow="Progetti" title="Lavori realizzati">
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
          <ul className="grid gap-8 md:grid-cols-2">
            {publishedProjects.map((p) => (
              <li key={p.name} className="overflow-hidden rounded-xl border bg-card">
                {p.image && (
                  <div className="aspect-video bg-muted">
                    <img src={p.image} alt={p.imageAlt ?? ""} loading="lazy" className="size-full object-cover" />
                  </div>
                )}
                <div className="p-6">
                  <p className="text-sm font-medium text-primary">{p.type}</p>
                  <h2 className="mt-1 text-xl font-semibold">{p.name}</h2>
                  <h3 className="mt-4 text-sm font-semibold">Esigenza iniziale</h3>
                  <p className="text-muted-foreground">{p.need}</p>
                  <h3 className="mt-3 text-sm font-semibold">Soluzione</h3>
                  <p className="text-muted-foreground">{p.solution}</p>
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
