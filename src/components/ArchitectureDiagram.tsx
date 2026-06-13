export default function ArchitectureDiagram() {
  const layers = ['Frontend: React + TypeScript', 'REST API: .NET', 'SQL Server']

  return (
    <div className="architecture" aria-label="High-level architecture">
      {layers.map((layer, index) => (
        <div className="architecture-step" key={layer}>
          <div>{layer}</div>
          {index < layers.length - 1 ? <span aria-hidden="true">↓</span> : null}
        </div>
      ))}
    </div>
  )
}
