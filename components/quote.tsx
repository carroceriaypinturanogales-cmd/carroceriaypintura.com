import { Camera, Car, MessageSquareText } from 'lucide-react'
import { PhoneLink, WhatsAppLink } from '@/components/cta-links'
import { SectionHeading } from '@/components/section-heading'
import { PHONE_DISPLAY, WHATSAPP_DISPLAY } from '@/lib/site'

const TIPS = [
  { icon: Camera, text: 'Fotos de los daños o del área que quieres mejorar.' },
  { icon: Car, text: 'Marca y modelo del vehículo.' },
  { icon: MessageSquareText, text: 'Una breve descripción del trabajo que necesitas.' },
]

export function Quote() {
  return (
    <section id="contacto" aria-labelledby="contacto-title" className="mx-auto max-w-6xl px-5 py-24 md:px-8">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
        <SectionHeading
          id="contacto-title"
          title="¿Necesitas una cotización?"
          description="Envíanos fotografías de tu vehículo por WhatsApp. Incluye, si es posible:"
        />
        <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
          <WhatsAppLink>WhatsApp · {WHATSAPP_DISPLAY}</WhatsAppLink>
          <PhoneLink>Llamar · {PHONE_DISPLAY}</PhoneLink>
        </div>
      </div>

      <ul className="mt-10 grid gap-3 md:grid-cols-3">
        {TIPS.map(({ icon: Icon, text }) => (
          <li key={text} className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <span className="pt-2 leading-snug">{text}</span>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-muted-foreground">Así podremos orientarte sobre el trabajo que requiere tu vehículo.</p>
    </section>
  )
}
