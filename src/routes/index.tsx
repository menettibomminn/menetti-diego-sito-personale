import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Globe, Repeat, Puzzle, LifeBuoy, MessageCircle } from "lucide-react";
import { services, site, publishedProjects, type ServiceSlug } from "@/config/site";
import { CtaBand, PrimaryLink } from "@/components/site/ui";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Automazioni aziendali e integrazione software a Bologna e Modena | Menetti Diego" },
      { name: "description", content: "Sono Diego Menetti: realizzo automazioni aziendali e collego i programmi delle PMI. Seguo anche software su misura, consulenza e siti web. Bologna, Modena e da remoto." },
      { property: "og:title", content: "Menetti Diego — Automazioni aziendali e integrazione tra software" },
      { property: "og:description", content: "Automazioni e collegamenti tra programmi per PMI. Parli direttamente con Diego Menetti, il professionista che realizza il lavoro." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const needs: { icon: typeof Globe; title: string; text: string; slug: ServiceSlug; cta: string }[] = [
  { icon: Repeat, slug: "automazione", title: "Ripeto ogni giorno gli stessi passaggi.", text: "Aprire fatture, trascrivere dati, preparare riepiloghi e inviarli via email. Esamino queste attività per capire quali passaggi automatizzare e quali controlli mantenere.", cta: "Descrivimi l'attività" },
  { icon: Puzzle, slug: "software", title: "Devo ricopiare i dati tra più programmi.", text: "Il gestionale e i fogli di calcolo contengono le stesse informazioni, ma vanno aggiornati separatamente. Verifico come collegarli; se manca una funzione, valuto uno strumento su misura.", cta: "Dimmi quali programmi usi" },
  { icon: Globe, slug: "siti-web", title: "Mi serve un sito, o devo aggiornare quello attuale.", text: "Realizzo siti per presentare servizi e prodotti e rendere facili da trovare i contatti. Posso occuparmi anche di dominio, hosting e manutenzione.", cta: "Parliamo del tuo sito" },
  { icon: LifeBuoy, slug: "consulenza", title: "Ho un problema informatico o un acquisto da valutare.", text: "Analizzo cosa non funziona e confronto le alternative. Ti aiuto a decidere quale intervento o programma è adatto al tuo lavoro.", cta: "Spiegami il problema" },
];

const steps = [
  { title: "Esamino il lavoro attuale", text: "Partiamo da un'attività concreta, dai programmi che usi e dai passaggi che fai a mano. Ti chiedo esempi per capire il problema prima di proporre un intervento." },
  { title: "Definiamo l'intervento", text: "Ti indico cosa posso realizzare, con costi, tempi e limiti. Se basta un programma già disponibile o l'intervento non conviene, te lo dico." },
  { title: "Realizzo e verifico", text: "Seguo io il lavoro e lo proviamo insieme. Ti mostro come usarlo e concordiamo l'eventuale supporto successivo." },
];

function Home() {
  return (
    <>
      <section className="border-b">
        <div className="container-page py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">{site.role}</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold md:text-6xl">Automazioni e integrazioni software per PMI.</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Sono Diego Menetti, consulente informatico indipendente. Realizzo automazioni per le attività ripetitive e collego i programmi che usi, così i dati non vanno ricopiati a mano. Quando serve, mi occupo anche di software su misura, consulenza e siti web. Dalla prima richiesta alla consegna, parli direttamente con me.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <PrimaryLink servizio="automazione">Parliamo del tuo lavoro</PrimaryLink>
            <Link to="/progetti" className="inline-flex min-h-11 items-center gap-2 px-2 font-semibold text-primary hover:underline">
              Vedi i progetti <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">Lavoro in presenza con aziende di Bologna, Modena e dintorni, e da remoto in tutta Italia.</p>
        </div>
      </section>

      <section aria-labelledby="bisogno" className="bg-secondary">
        <div className="container-page py-16">
          <h2 id="bisogno" className="text-3xl font-semibold md:text-4xl">Di cosa hai bisogno?</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">Posso intervenire su attività ripetitive e programmi scollegati, ma anche su un sito o un problema informatico.</p>
          <ul className="mt-10 grid gap-5 md:grid-cols-2">
            {needs.map((n) => (
              <li key={n.slug} className="flex flex-col rounded-xl border bg-card p-6">
                <div className="flex items-center gap-3">
                  <n.icon className="size-6 shrink-0 text-primary" aria-hidden />
                  <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                    {({ "siti-web": "Siti web", automazione: "Automazioni", software: "Integrazioni e software", consulenza: "Consulenza" } as Record<string, string>)[n.slug]}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-semibold">{n.title}</h3>
                <p className="mt-2 flex-1 text-muted-foreground">{n.text}</p>
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                  <Link to="/contatti" search={{ servizio: n.slug }} className="inline-flex min-h-11 items-center gap-2 font-semibold text-primary hover:underline">
                    {n.cta} <ArrowRight className="size-4" aria-hidden />
                  </Link>
                  <Link to="/servizi" hash={n.slug} className="inline-flex min-h-11 items-center text-sm text-muted-foreground underline-offset-4 hover:underline">
                    Leggi i dettagli
                  </Link>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-4 rounded-xl border-2 border-dashed border-primary/40 bg-card p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <MessageCircle className="mt-1 size-6 shrink-0 text-primary" aria-hidden />
              <div>
                <p className="text-lg font-semibold">Non sai quale intervento serve?</p>
                <p className="text-muted-foreground">Partiamo dal problema: cosa fai oggi e cosa non funziona come vorresti.</p>
              </div>
            </div>
            <div className="shrink-0"><PrimaryLink servizio="non-so">Scrivimi</PrimaryLink></div>
          </div>
        </div>
      </section>

      <section aria-labelledby="servizi">
        <div className="container-page py-16">
          <h2 id="servizi" className="text-3xl font-semibold md:text-4xl">Di cosa mi occupo</h2>
          <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {services.map((s) => (
              <div key={s.slug} className="border-l-2 border-highlight pl-5">
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-muted-foreground">{s.short}</p>
                <Link to="/servizi" hash={s.slug} className="mt-2 inline-flex min-h-11 items-center gap-1 font-semibold text-primary hover:underline">
                  Dettagli del servizio <ArrowRight className="size-4" aria-hidden />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="metodo" className="bg-ink text-ink-foreground">
        <div className="container-page py-16">
          <h2 id="metodo" className="text-3xl font-semibold md:text-4xl">Come lavoro</h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title}>
                <span className="font-display text-3xl font-semibold text-highlight">{i + 1}</span>
                <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 opacity-85">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {publishedProjects.length > 0 && (
        <section aria-labelledby="progetti">
          <div className="container-page py-16">
            <h2 id="progetti" className="text-3xl font-semibold md:text-4xl">Alcuni lavori realizzati</h2>
            <ul className="mt-8 grid gap-6 md:grid-cols-3">
              {publishedProjects.slice(0, 3).map((p) => (
                <li key={p.name} className="rounded-xl border bg-card p-5">
                  <p className="text-sm text-primary">{p.type}</p>
                  <h3 className="mt-1 text-lg font-semibold">{p.name}</h3>
                  <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{p.need || p.solution}</p>
                </li>
              ))}
            </ul>
            <Link to="/progetti" className="mt-6 inline-flex min-h-11 items-center gap-1 font-semibold text-primary hover:underline">Vedi tutti i progetti <ArrowRight className="size-4" aria-hidden /></Link>
          </div>
        </section>
      )}

      <section aria-labelledby="chi">
        <div className="container-page grid gap-8 py-16 md:grid-cols-[1fr_2fr] md:items-center">
          <h2 id="chi" className="text-3xl font-semibold md:text-4xl">Chi sono</h2>
          <div>
            <p className="text-lg text-muted-foreground">
              Lavoro con piccole e medie imprese, artigiani e professionisti. Mi interessa capire come vengono usati i programmi nel lavoro quotidiano e dove un intervento può essere utile. Mi occupo personalmente dell'analisi e della realizzazione: non ci sono passaggi tra commerciale e tecnico.
            </p>
            <Link to="/chi-sono" className="mt-4 inline-flex min-h-11 items-center gap-1 font-semibold text-primary hover:underline">Il mio approccio <ArrowRight className="size-4" aria-hidden /></Link>
          </div>
        </div>
      </section>

      <CtaBand title="Quale attività vorresti smettere di fare a mano?" text="Scrivimi come la gestisci e quali programmi usi. È il punto di partenza per valutare un'automazione o un collegamento." cta="Descrivimi l'attività" />
    </>
  );
}
