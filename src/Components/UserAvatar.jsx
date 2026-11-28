import { useState } from 'react'

export default function UserAvatar({
  src,
  name,
  size = 'h-7 w-7',
  textSize = 'text-[12px]',
  status = true,
  className = '',
}) {
  const [failedSrc, setFailedSrc] = useState(null)
  const displayName = String(name || '').trim()
  const initial = displayName.charAt(0).toUpperCase() || '?'
  const showImage = Boolean(src) && failedSrc !== src

  return (
    <span className={`relative shrink-0 ${className}`}>
      <span
        className={`flex ${size} items-center justify-center overflow-hidden rounded-md gradient-brand font-display font-semibold text-ember-ink ${textSize}`}
      >
        {showImage ? (
          <img
            src={src}
            alt=""
            referrerPolicy="no-referrer"
            onError={() => setFailedSrc(src)}
            className="h-full w-full object-cover"
          />
        ) : (
          initial
        )}
      </span>
      {status && (
        <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-paper bg-positive" />
      )}
    </span>
  )
}
