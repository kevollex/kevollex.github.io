type ArchitectureDiagramProps = {
  ariaLabel: string
  coreLabel: string
  layerLabel: string
  layers: string[]
}

export default function ArchitectureDiagram({
  ariaLabel,
  coreLabel,
  layerLabel,
  layers,
}: ArchitectureDiagramProps) {
  return (
    <div className="architecture" aria-label={ariaLabel}>
      <p className="architecture-kicker">{coreLabel}</p>
      <ol className="architecture-flow">
        {layers.map((layer, index) => (
          <li className="architecture-step" key={layer}>
            <span>{`${layerLabel} ${String(index + 1).padStart(2, '0')}`}</span>
            <strong>{layer}</strong>
          </li>
        ))}
      </ol>
    </div>
  )
}
