import { Plus } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { FAQS } from '@/lib/site'

export function Faq() {
  return (
    <section aria-labelledby="faq-title" className="mx-auto max-w-6xl px-5 py-24 md:px-8">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        <SectionHeading id="faq-title" title="Preguntas frecuentes" />
        <div className="divide-y divide-border border-y border-border">
          {FAQS.map((faq) => (
            <details key={faq.q} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-display text-lg font-medium tracking-wide [&::-webkit-details-marker]:hidden">
                {faq.q}
                <Plus
                  className="size-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="pb-5 pr-10 leading-relaxed text-muted-foreground">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
