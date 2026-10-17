import { Phone } from 'lucide-react'
import { WhatsAppIcon } from '@/components/brand-icons'
import { PHONE_URL, WHATSAPP_URL } from '@/lib/site'
import { cn } from '@/lib/utils'

const base =
  'inline-flex items-center justify-center gap-2.5 rounded-xl px-6 py-4 font-display text-sm font-semibold uppercase tracking-wider transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring'

export function WhatsAppLink({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(base, 'bg-primary text-primary-foreground hover:bg-primary/85', className)}
    >
      <WhatsAppIcon className="size-4" />
      {children}
    </a>
  )
}

export function PhoneLink({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href={PHONE_URL}
      className={cn(base, 'border border-border text-foreground hover:bg-secondary', className)}
    >
      <Phone className="size-4" aria-hidden="true" />
      {children}
    </a>
  )
}
