'use client'

import { useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { FacebookIcon, InstagramIcon, XIcon } from '@/components/brand-icons'
import { NAV_LINKS, PHONE_URL, SOCIAL } from '@/lib/site'

export function SocialLinks({ className = '' }: { className?: string }) {
  const items = [
    { href: PHONE_URL, label: 'Llamar al taller', icon: Phone, external: false },
    { href: SOCIAL.instagram, label: 'Instagram', icon: InstagramIcon, external: true },
    { href: SOCIAL.facebook, label: 'Facebook', icon: FacebookIcon, external: true },
    { href: SOCIAL.x, label: 'X (Twitter)', icon: XIcon, external: true },
  ]
  return (
    <ul className={`flex items-center gap-1 ${className}`}>
      {items.map(({ href, label, icon: Icon, external }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="flex size-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <Icon className="size-[18px]" />
          </a>
        </li>
      ))}
    </ul>
  )
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <a
        href="#servicios"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Saltar al contenido
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#inicio" className="flex flex-col leading-none">
          <span className="font-display text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
            Taller de
          </span>
          <span className="mt-1 font-display text-base font-semibold uppercase tracking-wide">
            Carrocería y pintura
          </span>
        </a>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-display text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <SocialLinks className="hidden lg:flex" />

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          className="flex size-10 items-center justify-center rounded-lg hover:bg-secondary md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Móvil" className="border-t border-border px-5 pb-5 md:hidden">
          <ul className="flex flex-col py-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-display text-base font-medium uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <SocialLinks />
        </nav>
      )}
    </header>
  )
}
