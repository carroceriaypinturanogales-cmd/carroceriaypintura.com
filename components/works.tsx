import Image from 'next/image'
import { BeforeAfter } from '@/components/before-after'
import { SectionHeading } from '@/components/section-heading'
import { FUSION_STEPS, GALLERY, VIDEOS } from '@/lib/site'

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground">{children}</h3>
  )
}

export function Works() {
  return (
    <section id="trabajos" aria-labelledby="trabajos-title" className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8">
        <SectionHeading
          id="trabajos-title"
          title="Mira algunos de nuestros trabajos"
          description="Conoce nuestros trabajos de carrocería, pintura, pulido y restauración. Consulta las fotografías y compara los resultados antes y después."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-start">
          <BeforeAfter />

          <div>
            <SubHeading>Fusion · golpe en defensa</SubHeading>
            <ol className="mt-4 grid grid-cols-3 gap-3 lg:grid-cols-1">
              {FUSION_STEPS.map((step, i) => (
                <li key={step.src}>
                  <figure className="relative aspect-[3/4] overflow-hidden rounded-xl bg-card lg:aspect-[16/9]">
                    <Image src={step.src} alt={step.alt} fill sizes="(min-width: 1024px) 420px, 33vw" className="object-cover" />
                    <figcaption className="absolute bottom-2 left-2 rounded-md bg-background/85 px-2 py-1 font-display text-xs font-semibold uppercase tracking-widest">
                      <span className="text-accent">{i + 1}.</span> {step.label}
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-20">
          <SubHeading>En video</SubHeading>
          <ul className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
            {VIDEOS.map((video) => (
              <li key={video.src}>
                <figure>
                  <video
                    src={video.src}
                    poster={video.poster}
                    controls
                    muted
                    playsInline
                    preload="none"
                    className="aspect-[9/16] w-full rounded-xl bg-card object-cover"
                  >
                    <track kind="captions" />
                  </video>
                  <figcaption className="mt-2 font-display text-sm font-medium uppercase tracking-widest text-muted-foreground">
                    {video.label}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20">
          <SubHeading>Galería</SubHeading>
          <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {GALLERY.map((photo) => (
              <li key={photo.src + photo.label}>
                <figure className="group relative aspect-square overflow-hidden rounded-xl bg-card">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1024px) 270px, (min-width: 640px) 33vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent px-3 pb-2.5 pt-8 font-display text-sm font-semibold uppercase tracking-widest">
                    {photo.label}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
