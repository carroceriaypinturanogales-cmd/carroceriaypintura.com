'use client'

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="es">
      <body className="flex min-h-screen flex-col items-center justify-center bg-black p-4 text-white">
        <h2 className="text-xl font-semibold">Algo salió mal</h2>
        <button
          onClick={() => reset()}
          className="mt-4 rounded-lg bg-red-600 px-4 py-2 font-medium text-white hover:bg-red-700"
        >
          Intentar de nuevo
        </button>
      </body>
    </html>
  )
}
