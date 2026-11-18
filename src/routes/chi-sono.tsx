import { createFileRoute } from "@tanstack/react-router";
import { UserRound } from "lucide-react";
import { CtaBand, PageIntro } from "@/components/site/ui";
import { site } from "@/config/site";

export const Route = createFileRoute("/chi-sono")({
  head: () => ({
    meta: [
      { title: "Chi sono — Diego Menetti, consulente informatico a Bologna" },
      { name: "description", content: "Sono Diego Menetti, consulente informatico indipendente. Mi occupo di automazioni e integrazioni per PMI: segui il lavoro direttamente con me, dall'analisi alla consegna." },
      { property: "og:title", content: "Chi sono — Diego Menetti" },
      { property: "og:description", content: "Mi occupo personalmente dell'analisi e della realizzazione. Lavoro tra Bologna e Modena e da remoto in tutta Italia." },
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
  { t: "Partire da un esempio", d: "Un documento, un foglio di calcolo o un'attività ricorrente mi aiutano a capire il problema meglio di una richiesta generica." },
  { t: "Usare quello che c'è", d: "Prima verifico cosa permettono i programmi che usi. Propongo uno sviluppo su misura solo se gli strumenti disponibili non bastano." },
  { t: "Concordare il lavoro", d: "Definiamo cosa è incluso, quanto costa e quali limiti ha l'intervento. Ti spiego i dettagli necessari senza gergo tecnico." },
  { t: "Seguire il progetto di persona", d: "Chi ascolta la tua richiesta è anche chi realizza il lavoro: puoi confrontarti direttamente con me durante il progetto." },
];

function ChiSono() {
  return (
    <>
      <PageIntro eyebrow="Chi sono" title="Diego Menetti, consulente informatico indipendente" />
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
            Mi occupo soprattutto di automazioni aziendali e integrazioni tra software. Lavoro con piccole e medie imprese, artigiani e professionisti che devono gestire dati, documenti e attività ripetitive. A questi interventi affianco consulenza informatica, sviluppo su misura e siti web.
          </p>
          <p className="text-muted-foreground">
            Prima di lavorare su un programma, cerco di capire come viene usato: chi inserisce i dati, dove vengono ricopiati e quali passaggi richiedono attenzione. Da lì valuto cosa automatizzare e cosa lasciare alla verifica di una persona. Se basta cambiare una procedura o usare una funzione già disponibile, te lo dico.
          </p>
          <p className="text-muted-foreground">Opero principalmente tra Bologna e Modena in presenza, e collaboro da remoto in tutta Italia.</p>
          <h2 className="pt-6 text-2xl font-semibold">Come seguo il lavoro</h2>
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
      <CtaBand title="Puoi scrivermi direttamente" text="Leggo io le richieste. Descrivimi la tua attività e il problema su cui vorresti intervenire." cta="Contattami" />
    </>
  );
}
