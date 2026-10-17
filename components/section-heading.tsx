export function SectionHeading({
  id,
  title,
  description,
}: {
  id: string
  title: string
  description?: React.ReactNode
}) {
  return (
    <div className="max-w-2xl">
      <h2 id={id} className="text-balance font-display text-4xl font-semibold uppercase tracking-tight md:text-5xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{description}</p>}
    </div>
  )
}
