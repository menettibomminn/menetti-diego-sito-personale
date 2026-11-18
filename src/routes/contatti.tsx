import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import { site } from "@/config/site";
import { PageIntro } from "@/components/site/ui";

const searchSchema = z.object({
  servizio: z.enum(["non-so", "siti-web", "automazione", "software", "consulenza"]).optional().catch(undefined),
});

export const Route = createFileRoute("/contatti")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Contatti — Consulente informatico Bologna e Modena | Menetti Diego" },
      { name: "description", content: "Contatta Diego Menetti per automazioni, integrazioni tra software e altri interventi informatici. Puoi usare il modulo Google, email, telefono o WhatsApp." },
      { property: "og:title", content: "Contatti — Menetti Diego" },
      { property: "og:description", content: "Leggo personalmente le richieste: descrivimi l'attività da automatizzare, i programmi da collegare o il problema informatico." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contatti" }],
  }),
  component: Contatti,
});

function Contatti() {
  const hasDirect = Boolean(site.email || site.phone);

  return (
    <>
      <PageIntro eyebrow="Contatti" title="Parliamo del tuo lavoro">
        Leggo e seguo personalmente le richieste. Puoi descrivermi un'attività da automatizzare, i programmi da collegare o un altro problema informatico. Non serve una spiegazione tecnica: dimmi cosa fai oggi e dove incontri difficoltà.
      </PageIntro>
      <section className="container-page grid gap-12 py-14 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-xl border bg-card p-8">
          <h2 className="text-2xl font-semibold">Scrivimi dal modulo</h2>
          <p className="mt-3 text-muted-foreground">
            Nel modulo Google puoi indicare chi sei e descrivere la richiesta. Si apre in una nuova scheda.
          </p>
          <a
            href={site.contactFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Apri il modulo di contatto
            <ArrowUpRight className="size-4" aria-hidden />
          </a>
        </div>
        <aside className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">Cosa succede dopo</h2>
            <ol className="mt-4 space-y-3 text-muted-foreground">
              <li><strong className="text-foreground">1.</strong> Esamino il problema che mi hai descritto.</li>
              <li><strong className="text-foreground">2.</strong> Ti ricontatto per chiarire i dettagli necessari.</li>
              <li><strong className="text-foreground">3.</strong> Ti dico se posso aiutarti e quale intervento valutare, senza impegno.</li>
            </ol>
          </div>
          {hasDirect && (
            <div>
              <h2 className="text-xl font-semibold">Recapiti diretti</h2>
              <ul className="mt-4 space-y-3">
                {site.email && <li><a href={`mailto:${site.email}`} className="inline-flex min-h-11 items-center gap-2 text-primary hover:underline"><Mail className="size-5" aria-hidden />{site.email}</a></li>}
                {site.pec && <li><a href={`mailto:${site.pec}`} className="inline-flex min-h-11 items-center gap-2 text-primary hover:underline"><Mail className="size-5" aria-hidden />PEC: {site.pec}</a></li>}
                {site.phone && <li><a href={`tel:${site.phone.replace(/\s/g, "")}`} className="inline-flex min-h-11 items-center gap-2 text-primary hover:underline"><Phone className="size-5" aria-hidden />{site.phone}</a></li>}
                {site.whatsapp && <li><a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-primary hover:underline"><MessageCircle className="size-5" aria-hidden />Scrivimi su WhatsApp</a></li>}
              </ul>
            </div>
          )}
          <p className="text-sm text-muted-foreground">{site.area}</p>
        </aside>
      </section>
    </>
  );
}
