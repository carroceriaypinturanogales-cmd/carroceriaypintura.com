import Image from 'next/image'
import { WhatsAppLink } from '@/components/cta-links'

export function Hero() {
  return (
    <section id="inicio" className="relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden">
      <Image
        src="/images/work-gmc.jpg"
        alt="GMC Sierra recién pulida frente al taller en Nogales"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[50%_40%]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/75 to-background/30"
      />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8">
        <div className="max-w-2xl">
          <p className="font-display text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Nogales, Sonora
          </p>
          <h1 className="mt-4 text-balance font-display text-5xl font-semibold uppercase leading-[0.95] tracking-tight md:text-7xl">
            Taller de carrocería y pintura en Nogales, Sonora
          </h1>
          <p className="mt-5 font-display text-xl font-medium md:text-2xl">
            Carrocería, pintura, pulido y restauración automotriz.
          </p>
          <p className="mt-5 text-pretty text-lg leading-relaxed">
            ¿Tu carro tiene un golpe, rayones, daños en la pintura o simplemente perdió su brillo?
          </p>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            En nuestro taller realizamos trabajos de carrocería, pintura, pulido y restauración automotriz para
            ayudarte a recuperar la apariencia de tu vehículo.
          </p>
          <WhatsAppLink className="mt-9">Mándanos fotos por WhatsApp</WhatsAppLink>
        </div>
      </div>
    </section>
  )
}
