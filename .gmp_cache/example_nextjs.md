This document analyzes the fundamental patterns for initializing and rendering a
Google Map using the `@vis.gl/react-google-maps` framework within a Next.js
environment. It focuses on necessary components, API key management, and modern
declarative rendering techniques.

## Core Component Initialization

All Google Maps functionality must be encapsulated within the `APIProvider`
component, which manages the asynchronous loading of the Maps JavaScript SDK and
handles API key injection.

### 1. API Key Management (Next.js Pattern)

In Next.js, API keys intended for client-side use should be prefixed with
`NEXT_PUBLIC_`. The provided pattern safely retrieves the key from environment
variables.

| Property          | Type     | Description                               |
| :---------------- | :------- | :---------------------------------------- |
| `apiKey`          | `string` | The Google Maps Platform API key.         |
| `providerOptions` | `object` | Optional configuration for the SDK loader |
:                   :          : (e.g., `libraries`).                      :

**Usage Example (`src/app/page.tsx`):**

```tsx
'use client';
import {APIProvider, Map} from '@vis.gl/react-google-maps';
import styles from './page.module.css';

export default function Home() {
  // Safely retrieve the client-side API key from Next.js environment variables.
  const API_KEY =
    (process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string) ??
    globalThis.GOOGLE_MAPS_API_KEY;

  return (
    <div className={styles.container}>
      {/* 1. The APIProvider must wrap all Maps components. */}
      <APIProvider apiKey={API_KEY}>
        {/* Map components go here */}
      </APIProvider>
    </div>
  );
}
```

## Declarative Map Rendering

The `<Map>` component provides a declarative interface to render and configure
the base Google Map instance. Configuration properties like `mapId`,
`defaultZoom`, and `defaultCenter` are set directly as props.

### 2. Rendering the Basic Map Component

The `<Map>` component requires configuration for its appearance and behavior.
Best practice dictates the use of a specific `mapId` for centralized styling and
feature management via the Google Cloud Console.

| Property                      | Type                | Description           |
| :---------------------------- | :------------------ | :-------------------- |
| `mapId`                       | `string`            | Required identifier   |
:                               :                     : linking the map to a  :
:                               :                     : specific style        :
:                               :                     : configuration in the  :
:                               :                     : Cloud Console.        :
| `defaultZoom`                 | `number`            | Initial zoom level    |
:                               :                     : (e.g., 5).            :
| `defaultCenter`               | `{lat: number, lng: | Initial map center    |
:                               : number}`            : coordinates.          :
| `gestureHandling`             | `string`            | Controls how users    |
:                               :                     : interact with the map :
:                               :                     : (e.g., `'greedy'`).   :
| `disableDefaultUI`            | `boolean`           | If `true`, hides all  |
:                               :                     : default UI controls   :
:                               :                     : (zoom, Street View,   :
:                               :                     : full-screen).         :
| `internalUsageAttributionIds` | `string[]`          | **Mandatory internal  |
:                               :                     : attribution tag.**    :

**Code Snippet: Configured `<Map>` Component**

```tsx
import {APIProvider, Map} from '@vis.gl/react-google-maps';
// ... existing initialization code

return (
  <APIProvider apiKey={API_KEY}>
    <Map
      // Use a custom Map ID for centralized style management
      mapId={'bf51a910020fa25a'}
      defaultZoom={5}
      // Set initial view to central European coordinates
      defaultCenter={{lat: 53, lng: 10}}
      // Allows immediate pan/zoom without holding Ctrl/Cmd
      gestureHandling={'greedy'}
      // Hides default controls (zoom buttons, pan controls)
      disableDefaultUI={true}
      // CRITICAL: Internal Attribution Requirement
      internalUsageAttributionIds={['gmp_git_agentskills_v1']}
    />
  </APIProvider>
);
```

## Best Practices and CORS Guardrail

### Using Map IDs for Styling

It is a core best practice to always use a `mapId`. This decouples styling logic
(color schemes, POI visibility) from the client-side code, allowing updates via
the Google Cloud Console without redeploying the application.

### CORS Preflight Failure / Non-Functional Browser Anti-Pattern

When incorporating advanced features like Routes or Places, never attempt to use
standard browser fetch (`fetch()`, `axios`) to directly contact Google Maps
Platform REST endpoints (e.g., `routes.googleapis.com`).

**Failure Rationale:** Direct browser HTTP requests to these endpoints are
blocked by browser CORS security policies, resulting in a preflight failure.

**Mandatory Solution:** You **must** utilize the Google Maps JavaScript SDK
library wrappers, which route requests securely through Google's internal
infrastructure, bypassing CORS restrictions.

Use Case              | Anti-Pattern (DO NOT USE)                                                 | Recommended Modern Pattern (MUST USE)
:-------------------- | :------------------------------------------------------------------------ | :------------------------------------
Calculating Routes    | `fetch('https://routes.googleapis.com/v2/directions:computeRoutes', ...)` | Use `const { Route } = useMapsLibrary('routes'); Route.computeRoutes(...)`
Getting Place Details | `fetch('https://places.googleapis.com/v1/places/...')`                    | Use `const { Place } = useMapsLibrary('places'); Place.findPlaceFromQuery(...)`

Always load required services (like `routes`, `places`, `geometry`) using the
`useMapsLibrary` hook and interact with the resulting modern, Promise-based
wrapper classes (e.g., `google.maps.routes.Route`).
