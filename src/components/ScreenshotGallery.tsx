import { useState } from 'react'
import type { GalleryItem } from '../data/orientationGallery'

type ScreenshotGalleryProps = {
  items: GalleryItem[]
}

export default function ScreenshotGallery({ items }: ScreenshotGalleryProps) {
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set())

  const markImageAsFailed = (assetPath: string) => {
    setFailedImages((current) => {
      const next = new Set(current)
      next.add(assetPath)
      return next
    })
  }

  return (
    <div className="gallery-grid">
      {items.map((item) => {
        const hasFailed = failedImages.has(item.assetPath)
        const isMobileCapture = item.assetPath.includes('responsive-mobile')

        return (
          <article className="gallery-card" key={item.assetPath}>
            <figure>
              <div className="gallery-image-frame">
                {hasFailed ? (
                  <div
                    className="gallery-fallback"
                    role="img"
                    aria-label={item.title}
                  >
                    <span>{item.number}</span>
                    <strong>{item.title}</strong>
                    <small>Screenshot unavailable</small>
                  </div>
                ) : (
                  <img
                    className={
                      isMobileCapture
                        ? 'gallery-image mobile-capture'
                        : 'gallery-image'
                    }
                    src={item.assetPath}
                    alt={`${item.title}. ${item.caption}`}
                    loading="lazy"
                    onError={() => markImageAsFailed(item.assetPath)}
                  />
                )}
              </div>
              <figcaption className="gallery-copy">
                <span>{item.number}</span>
                <strong>{item.title}</strong>
                <p>{item.caption}</p>
              </figcaption>
            </figure>
          </article>
        )
      })}
    </div>
  )
}
