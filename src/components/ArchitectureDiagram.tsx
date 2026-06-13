type ArchitectureDiagramProps = {
  ariaLabel: string
  layers: string[]
}

export default function ArchitectureDiagram({
  ariaLabel,
  layers,
}: ArchitectureDiagramProps) {
  return (
    <div className="architecture" aria-label={ariaLabel}>
      {layers.map((layer, index) => (
        <div className="architecture-step" key={layer}>
          <div>{layer}</div>
          {index < layers.length - 1 ? <span aria-hidden="true">↓</span> : null}
        </div>
      ))}
    </div>
  )
}
