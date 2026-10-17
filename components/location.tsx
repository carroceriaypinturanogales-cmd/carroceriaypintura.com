import { Clock, MapPin, Navigation, Phone } from 'lucide-react'
import { WhatsAppIcon } from '@/components/brand-icons'
import { WhatsAppLink } from '@/components/cta-links'
import { SectionHeading } from '@/components/section-heading'
import { WorkshopMap } from '@/components/workshop-map'
import {
  ADDRESS,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_URL,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from '@/lib/site'

export function Location() {
  return (
    <section id="ubicacion" aria-labelledby="ubicacion-title" className="border-t border-border bg-card/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-24 md:px-8">
        <SectionHeading
          id="ubicacion-title"
          title="Visítanos en Nogales"
          description="Taller de carrocería y pintura en José Zazueta #16, Col. Los Encinos, Nogales, Sonora. Consulta nuestra ubicación en Google Maps, agenda una visita o cotiza por WhatsApp."
        />

        <address className="grid gap-5 not-italic sm:grid-cols-2">
          <p className="flex gap-4">
            <MapPin className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
            <span>
              {ADDRESS.street}
              <br />
              <span className="text-muted-foreground">{ADDRESS.city}</span>
            </span>
          </p>
          <p className="flex gap-4">
            <Clock className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
            <span>{ADDRESS.hours}</span>
          </p>
          <p className="flex gap-4">
            <WhatsAppIcon className="mt-0.5 size-5 shrink-0 text-accent" />
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">
              WhatsApp: {WHATSAPP_DISPLAY}
            </a>
          </p>
          <p className="flex gap-4">
            <Phone className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
            <a href={PHONE_URL} className="hover:underline">
              Teléfono: {PHONE_DISPLAY}
            </a>
          </p>
        </address>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-primary px-8 py-5 font-display text-base font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/85"
          >
            <Navigation className="size-5" aria-hidden="true" />
            Cómo llegar
          </a>
          <WhatsAppLink className="border border-border bg-transparent px-8 py-5 text-base text-foreground hover:bg-secondary">
            Cotiza por WhatsApp
          </WhatsAppLink>
        </div>

        <div className="relative h-96 w-full overflow-hidden rounded-2xl border border-border bg-card shadow-lg md:h-[450px]">
          <WorkshopMap />
        </div>
      </div>
    </section>
  )
}
