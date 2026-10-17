'use client'

import { useEffect, useState } from 'react'
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
  useAdvancedMarkerRef,
} from '@vis.gl/react-google-maps'
import { ExternalLink, MapPin, Navigation } from 'lucide-react'
import { ADDRESS, BUSINESS, MAPS_URL } from '@/lib/site'

const WORKSHOP_COORDINATES = { lat: 31.2988658, lng: -110.955061 }

function MapInner() {
  const [markerRef, marker] = useAdvancedMarkerRef()
  const [infoOpen, setInfoOpen] = useState(true)

  return (
    <Map
      mapId="DEMO_MAP_ID"
      defaultCenter={WORKSHOP_COORDINATES}
      defaultZoom={16}
      gestureHandling="greedy"
      disableDefaultUI={false}
      internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
      className="size-full"
      style={{ width: '100%', height: '100%' }}
    >
      <AdvancedMarker
        ref={markerRef}
        position={WORKSHOP_COORDINATES}
        title={BUSINESS.name}
        onClick={() => setInfoOpen(true)}
      >
        <Pin
          background="#c8202b"
          borderColor="#ffffff"
          glyphColor="#ffffff"
          scale={1.2}
        />
      </AdvancedMarker>

      {infoOpen && (
        <InfoWindow
          anchor={marker}
          onCloseClick={() => setInfoOpen(false)}
          headerContent={
            <div className="font-sans font-semibold text-zinc-900">
              {BUSINESS.name}
            </div>
          }
        >
          <div className="flex flex-col gap-2 p-1 font-sans text-xs text-zinc-800">
            <p className="flex items-start gap-1.5">
              <MapPin className="mt-0.5 size-3.5 shrink-0 text-red-600" />
              <span>{ADDRESS.street}, {ADDRESS.city}</span>
            </p>
            <p className="text-[11px] text-zinc-600">
              Horario: {ADDRESS.hours}
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center justify-center gap-1.5 rounded-md bg-red-600 px-3 py-1.5 text-xs font-medium text-white shadow-sm transition hover:bg-red-700"
            >
              <Navigation className="size-3" />
              Abrir en Google Maps
              <ExternalLink className="size-3" />
            </a>
          </div>
        </InfoWindow>
      )}
    </Map>
  )
}

export function WorkshopMap() {
  const [mounted, setMounted] = useState(false)
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || !apiKey) {
    return (
      <div className="flex size-full flex-col items-center justify-center bg-card p-6 text-center text-muted-foreground">
        <MapPin className="mb-2 size-8 text-accent" />
        <p className="font-semibold text-foreground">{BUSINESS.name}</p>
        <p className="mt-1 text-sm">{ADDRESS.street}, {ADDRESS.city}</p>
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 font-display text-xs font-semibold uppercase tracking-wider text-primary-foreground"
        >
          <Navigation className="size-4" />
          Ver en Google Maps
        </a>
      </div>
    )
  }

  return (
    <div className="relative size-full overflow-hidden">
      <APIProvider apiKey={apiKey}>
        <MapInner />
      </APIProvider>
    </div>
  )
}
