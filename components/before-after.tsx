'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MoveHorizontal } from 'lucide-react'

export function BeforeAfter() {
  const [position, setPosition] = useState(50)

  return (
    <figure>
      <div className="relative aspect-[4/5] w-full select-none overflow-hidden rounded-2xl bg-card sm:aspect-[4/3]">
        <Image
          src="/images/gmc-antes.jpg"
          alt="GMC antes del trabajo"
          fill
          sizes="(min-width: 1024px) 700px, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
          <Image
            src="/images/gmc-despues.jpg"
            alt="GMC después del trabajo"
            fill
            sizes="(min-width: 1024px) 700px, 100vw"
            className="object-cover"
          />
        </div>

        <span className="absolute left-3 top-3 rounded-md bg-background/80 px-2.5 py-1 font-display text-xs font-semibold uppercase tracking-widest">
          Después
        </span>
        <span className="absolute right-3 top-3 rounded-md bg-background/80 px-2.5 py-1 font-display text-xs font-semibold uppercase tracking-widest">
          Antes
        </span>

        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 w-0.5 bg-primary" style={{ left: `${position}%` }}>
          <span className="absolute left-1/2 top-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
            <MoveHorizontal className="size-5" />
          </span>
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          aria-label="Arrastra para comparar antes y después"
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <figcaption className="mt-3 flex items-center justify-between gap-4 text-sm text-muted-foreground">
        <span className="font-display font-medium uppercase tracking-widest text-foreground">GMC · antes y después</span>
        <span>Desliza la barra para comparar.</span>
      </figcaption>
    </figure>
  )
}
