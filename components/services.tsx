import Image from 'next/image'
import { SectionHeading } from '@/components/section-heading'
import { SERVICES } from '@/lib/site'

export function Services() {
  return (
    <section id="servicios" aria-labelledby="servicios-title" className="mx-auto max-w-6xl px-5 py-24 md:px-8">
      <SectionHeading
        id="servicios-title"
        title="Nuestros servicios"
        description="Soluciones profesionales para reparar, restaurar y mejorar la apariencia de tu vehículo."
      />

      <ol className="mt-14 flex flex-col divide-y divide-border border-y border-border">
        {SERVICES.map((service, index) => (
          <li key={service.title} className="grid gap-6 py-10 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-10">
            <div>
              <span className="font-display text-sm font-medium tracking-[0.2em] text-accent">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-2 font-display text-2xl font-semibold uppercase tracking-wide md:text-3xl">
                {service.title}
              </h3>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{service.description}</p>
            </div>

            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {service.photos.map((photo) => (
                <li key={photo.src} className="relative aspect-[3/4] overflow-hidden rounded-xl bg-card">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 768px) 200px, 50vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  )
}
