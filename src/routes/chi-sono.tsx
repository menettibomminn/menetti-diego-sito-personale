import { createFileRoute } from "@tanstack/react-router";
import { UserRound } from "lucide-react";
import { CtaBand, PageIntro } from "@/components/site/ui";
import { site } from "@/config/site";

export const Route = createFileRoute("/chi-sono")({
  head: () => ({
    meta: [
      { title: "Chi sono — Diego Menetti, consulente informatico freelance" },
      { name: "description", content: "Consulente informatico e sviluppatore freelance: capisco le esigenze, valuto le alternative e realizzo interventi proporzionati al problema." },
      { property: "og:title", content: "Chi sono — Diego Menetti" },
      { property: "og:description", content: "Un approccio pratico e personale alla tecnologia per imprese e professionisti." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/chi-sono" }],
  }),
  component: ChiSono,
});

import photoAsset from "@/assets/diego-menetti.jpg.asset.json";
const photo: string | null = photoAsset.url;

const principles = [
  { t: "Prima capire, poi proporre", d: "Ogni intervento parte da una conversazione sul tuo lavoro, non da uno strumento da vendere." },
  { t: "Soluzioni proporzionate", d: "Se basta una soluzione semplice o un programma già esistente, te lo dico. Sviluppo su misura solo quando serve e se ha un valore reale per te." },
  { t: "Chiarezza", d: "Spiego cosa faccio, quanto costa e quali sono i limiti, con parole comprensibili anche a chi non è del settore." },
  { t: "Un unico referente", d: "Parli direttamente con chi realizza il lavoro, senza passaggi intermedi." },
];

function ChiSono() {
  return (
    <>
      <PageIntro eyebrow="Chi sono" title="Diego Menetti, consulente informatico e sviluppatore freelance" />
      <section className="container-page grid gap-12 py-16 md:grid-cols-[18rem_1fr]">
        <div className="aspect-[4/5] w-full max-w-72 overflow-hidden rounded-xl bg-muted">
          {photo ? (
            <img src={photo} alt="Ritratto di Diego Menetti" className="size-full object-cover" />
          ) : (
            <div className="flex size-full items-center justify-center" aria-hidden>
              <UserRound className="size-20 text-muted-foreground/60" />
            </div>
          )}
        </div>
        <div className="max-w-2xl space-y-5 text-lg">
          <p>
            Mi occupo di consulenza informatica, sviluppo software e automazione. Lavoro con piccole e medie imprese, artigiani, attività locali e professionisti che vogliono usare meglio la tecnologia nel lavoro di tutti i giorni.
          </p>
          <p className="text-muted-foreground">
            Il mio lavoro consiste nel comprendere le tue esigenze, valutare le soluzioni possibili e realizzare interventi proporzionati al problema: un sito chiaro, un'automazione che elimina un passaggio ripetitivo, uno strumento su misura o semplicemente un consiglio su cosa scegliere.
          </p>
          <p className="text-muted-foreground">Opero principalmente tra {site.area.replace(", anche da remoto in tutta Italia", "")}, e collaboro volentieri anche da remoto.</p>
          <h2 className="pt-6 text-2xl font-semibold">Come mi piace lavorare</h2>
          <ul className="grid gap-6 sm:grid-cols-2">
            {principles.map((p) => (
              <li key={p.t}>
                <h3 className="text-lg font-semibold">{p.t}</h3>
                <p className="mt-1 text-base text-muted-foreground">{p.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand title="Parliamone" text="Raccontami la tua attività e cosa vorresti migliorare." cta="Vai ai contatti" />
    </>
  );
}
