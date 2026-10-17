'use client'

import { useCallback } from 'react'

// Minimal local FB types — replace with @types/facebook-js-sdk if you install it
declare global {
  interface Window {
    FB: any
  }
}

type FBStatusResponse = any

export function getLoginStatus(): Promise<FBStatusResponse> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.FB) {
      reject(new Error('Facebook SDK not loaded'))
      return
    }
    try {
      window.FB.getLoginStatus((response: FBStatusResponse) => resolve(response))
    } catch (err) {
      reject(err)
    }
  })
}

export function fbLogin(options: { scope?: string } = {}): Promise<FBStatusResponse> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.FB) {
      reject(new Error('Facebook SDK not loaded'))
      return
    }
    window.FB.login(
      (loginResponse: any) => {
        // After login we usually want the status
        window.FB.getLoginStatus((statusResponse: FBStatusResponse) => resolve(statusResponse))
      },
      { scope: options.scope || 'public_profile,email' }
    )
  })
}

export default function FacebookLogin({
  onStatus,
  className = '',
}: {
  onStatus?: (resp: FBStatusResponse) => void
  className?: string
}) {
  const handleClick = useCallback(async () => {
    try {
      const status = await fbLogin({ scope: 'public_profile,email' })
      onStatus?.(status)
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('FB login failed', err)
    }
  }, [onStatus])

  const handleCheckStatus = useCallback(async () => {
    try {
      const status = await getLoginStatus()
      onStatus?.(status)
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('FB getLoginStatus failed', err)
    }
  }, [onStatus])

  return (
    <div className={className}>
      <button
        type="button"
        onClick={handleClick}
        className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
      >
        Continuar con Facebook
      </button>
      <button
        type="button"
        onClick={handleCheckStatus}
        className="ml-2 inline-flex items-center gap-2 rounded-md bg-gray-200 px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-300"
      >
        Comprobar estado FB
      </button>
    </div>
  )
}
