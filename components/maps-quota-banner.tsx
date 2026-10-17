'use client'

import { useEffect, useState } from 'react'

export function MapsQuotaBanner() {
  const [quotaExceeded, setQuotaExceeded] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Setup global auth failure handler
    ;(window as unknown as { gm_authFailure?: () => void }).gm_authFailure = () => {
      window.dispatchEvent(new CustomEvent('gmp-quota-exceeded'))
    }

    // Intercept console.error for OverQuotaMapError
    const origError = console.error
    console.error = (...args: unknown[]) => {
      origError.apply(console, args)
      const msg = args.map((a) => String(a)).join(' ')
      if (msg.includes('OverQuotaMapError') || msg.includes('QuotaExceededError')) {
        window.dispatchEvent(new CustomEvent('gmp-quota-exceeded'))
      }
    }

    const handleQuota = () => {
      setQuotaExceeded(true)
    }

    window.addEventListener('gmp-quota-exceeded', handleQuota)

    return () => {
      window.removeEventListener('gmp-quota-exceeded', handleQuota)
      console.error = origError
    }
  }, [])

  if (!quotaExceeded) return null

  return (
    <div className="sticky top-0 z-50 border-b border-amber-200 bg-amber-50 px-4 py-2.5 text-center text-xs text-amber-900 shadow-sm md:text-sm">
      <span>
        Google Maps Platform quota reached. If you are the app owner, visit{' '}
        <a
          href="https://developers.google.com/maps/ai/ai-studio?utm_campaign=gmp_mcp_codeassist_v1_aistudio#quota_exceeded_errors"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-amber-950 underline hover:text-amber-800"
        >
          maps developer site
        </a>{' '}
        for instructions to update your account.
      </span>
    </div>
  )
}
