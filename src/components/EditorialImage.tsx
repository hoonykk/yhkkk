import { useState } from 'react';
import { Camera } from 'lucide-react';

interface EditorialImageProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  aspectClassName?: string;
  imgClassName?: string;
  priority?: boolean;
}

export function EditorialImage({
  src,
  alt,
  caption,
  className = '',
  aspectClassName = 'aspect-[4/3]',
  imgClassName = 'object-cover object-[50%_20%]',
  priority = false,
}: EditorialImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <figure className={`relative overflow-hidden bg-surface-muted ${aspectClassName} ${className}`}>
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading={priority ? 'eager' : 'lazy'}
          onError={() => setHasError(true)}
          className={`h-full w-full transition-transform duration-500 ease-out ${imgClassName}`}
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#EAEAE4] to-[#DCDCD4] p-6 text-center text-ink-muted">
          <Camera className="mb-2 h-5 w-5 opacity-60" aria-hidden="true" />
          <p className="max-w-xs text-xs leading-relaxed">{alt}</p>
        </div>
      )}
      {caption && (
        <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/45 to-transparent px-4 pb-3 pt-10 text-xs text-white/90">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
