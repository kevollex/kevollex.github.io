import { useState } from 'react'
import type { GalleryTranslation } from '../i18n/translations'

type ScreenshotGalleryProps = {
  items: readonly GalleryTranslation[]
  fallbackText: string
}

export default function ScreenshotGallery({
  items,
  fallbackText,
}: ScreenshotGalleryProps) {
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
                    <small>{fallbackText}</small>
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
                <div className="gallery-meta">
                  <span>{item.number}</span>
                  <strong>{item.title}</strong>
                </div>
                <p>{item.caption}</p>
              </figcaption>
            </figure>
          </article>
        )
      })}
    </div>
  )
}
