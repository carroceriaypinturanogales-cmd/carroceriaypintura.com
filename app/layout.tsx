import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Barlow, Barlow_Condensed } from 'next/font/google'
import './globals.css'
import { pageMetadata, SITE_URL } from '@/lib/metadata'

const FB_APP_ID = '1133529849209619'
const FB_VERSION = 'v26.0'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-barlow',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-barlow-condensed',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...pageMetadata(),
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
  other: {
    'fb:app_id': FB_APP_ID,
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0c0d10',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-MX" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body className="antialiased">
        {children}
        <Script id="facebook-sdk" strategy="afterInteractive">
          {`
            window.fbAsyncInit = function() {
              FB.init({
                appId: '${FB_APP_ID}',
                cookie: true,
                xfbml: true,
                version: '${FB_VERSION}'
              });
              FB.AppEvents.logPageView();
            };
            (function(d, s, id){
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) {return;}
              js = d.createElement(s); js.id = id;
              js.src = "https://connect.facebook.net/en_US/sdk.js";
              fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
          `}
        </Script>
      </body>
    </html>
  )
}
