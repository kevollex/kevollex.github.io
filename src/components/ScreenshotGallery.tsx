import type { GalleryItem } from '../data/orientationGallery'

type ScreenshotGalleryProps = {
  items: GalleryItem[]
}

export default function ScreenshotGallery({ items }: ScreenshotGalleryProps) {
  return (
    <div className="gallery-grid">
      {items.map((item) => (
        <article className="gallery-card" key={item.assetPath}>
          <div className="gallery-placeholder" aria-label={item.title}>
            <span>{item.number}</span>
            <strong>{item.title}</strong>
            <small>{item.assetPath}</small>
          </div>
          <p>{item.caption}</p>
        </article>
      ))}
    </div>
  )
}
