import Image from 'next/image'
import { WhatsAppIcon } from '@/components/brand-icons'
import { WhatsAppLink } from '@/components/cta-links'
import { SocialLinks } from '@/components/site-header'
import { ADDRESS, PHONE_DISPLAY, PHONE_URL, WHATSAPP_DISPLAY, WHATSAPP_URL } from '@/lib/site'

export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="relative isolate overflow-hidden border-t border-border">
      <Image
        src="/images/work-taller.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-background/85" />
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8">
        <h2
          id="cta-title"
          className="max-w-3xl text-balance font-display text-4xl font-semibold uppercase tracking-tight md:text-6xl"
        >
          ¿Tu carro necesita reparación o quieres recuperar su apariencia?
        </h2>
        <p className="mt-5 max-w-xl text-lg text-muted-foreground">
          Mándanos fotos por WhatsApp y cuéntanos qué necesita tu vehículo.
        </p>
        <WhatsAppLink className="mt-9">Cotizar por WhatsApp</WhatsAppLink>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-display text-lg font-semibold uppercase tracking-wide">Taller de carrocería y pintura</p>
          <p className="mt-2 text-sm text-muted-foreground">Carrocería, pintura, pulido y restauración automotriz.</p>
        </div>
        <address className="text-sm not-italic leading-relaxed text-muted-foreground">
          {ADDRESS.street}
          <br />
          {ADDRESS.city}
          <br />
          {ADDRESS.hours}
        </address>
        <div className="flex flex-col gap-2 text-sm">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">
            WhatsApp: {WHATSAPP_DISPLAY}
          </a>
          <a href={PHONE_URL} className="hover:underline">
            Teléfono: {PHONE_DISPLAY}
          </a>
          <SocialLinks className="-ml-2 mt-2" />
        </div>
      </div>
      <p className="border-t border-border px-5 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Taller de Carrocería y Pintura · Nogales, Sonora
      </p>
    </footer>
  )
}

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3.5 font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-2xl shadow-black/50 transition-colors hover:bg-primary/85"
    >
      <WhatsAppIcon className="size-4" />
      Cotizar por WhatsApp
    </a>
  )
}
