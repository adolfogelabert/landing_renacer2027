import React, { useState } from 'react';
import { PillarItem } from '../data/retreatData';

interface PillarIconProps {
  type: PillarItem['icon'];
  className?: string;
}

export function PillarSacredIcon({ type, className = 'w-9 h-9' }: PillarIconProps) {
  switch (type) {
    case 'lotus':
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
          <path
            d="M24 9C20.8 14.2 19.6 19.8 24 26.8C28.4 19.8 27.2 14.2 24 9Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 27C18.5 23.2 15.2 18.2 14.6 13.5C11.4 18.1 11.8 25.1 18.5 29.8"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 27C29.5 23.2 32.8 18.2 33.4 13.5C36.6 18.1 36.2 25.1 29.5 29.8"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.8 30.2C12.2 29.6 8.3 26.8 6.8 22.8C6.6 28.4 10.6 34.4 19.6 35.4H28.4C37.4 34.4 41.4 28.4 41.2 22.8C39.7 26.8 35.8 29.6 30.2 30.2"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 39H33"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            opacity="0.7"
          />
        </svg>
      );
    case 'thirdEye':
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
          <path
            d="M6.5 25C10.8 17.8 17 14.5 24 14.5C31 14.5 37.2 17.8 41.5 25C37.2 32.2 31 35.5 24 35.5C17 35.5 10.8 32.2 6.5 25Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <circle cx="24" cy="25" r="5.8" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="24" cy="25" r="2.1" fill="currentColor" />
          <path d="M24 7V10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M15 9.2L16.8 12.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M33 9.2L31.2 12.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M24 39.5V42" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.65" />
          <path d="M16.5 38.2L15.2 40.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.65" />
          <path d="M31.5 38.2L32.8 40.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.65" />
        </svg>
      );
    case 'spiral':
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
          <path
            d="M24 24.5C24 22.8 25.4 21.5 27 21.5C29.4 21.5 31 23.5 31 25.8C31 29.4 27.9 32 24.2 32C19.3 32 15.8 28.2 15.8 23.4C15.8 17.3 20.8 12.8 26.9 12.8C34.2 12.8 39.5 18.6 39.5 25.9C39.5 34.4 32.5 40.5 23.8 40.5C14.1 40.5 8 33.4 8 24C8 14.3 15.2 7.5 25 7.5"
            stroke="currentColor"
            strokeWidth="1.65"
            strokeLinecap="round"
          />
          <circle cx="24" cy="24.5" r="1.4" fill="currentColor" />
        </svg>
      );
    case 'butterfly':
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
          <path
            d="M24 17V35"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M24 17C22.2 13.5 20.5 11.8 18.5 11"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <path
            d="M24 17C25.8 13.5 27.5 11.8 29.5 11"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <path
            d="M24 21.5C19.5 13.2 9.5 10.8 7.5 17.5C6.2 21.8 10.2 26.2 16.4 26.6C11.5 28.4 10.6 34.8 15.2 36.8C19.2 38.5 22.8 35.2 24 30.8"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 21.5C28.5 13.2 38.5 10.8 40.5 17.5C41.8 21.8 37.8 26.2 31.6 26.6C36.5 28.4 37.4 34.8 32.8 36.8C28.8 38.5 25.2 35.2 24 30.8"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'sacredHeart':
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
          <path
            d="M24 39.5C24 39.5 9.5 30.4 9.5 19.6C9.5 14.3 13.6 10.5 18.3 10.5C21.2 10.5 23.1 12.1 24 14.2C24.9 12.1 26.8 10.5 29.7 10.5C34.4 10.5 38.5 14.3 38.5 19.6C38.5 30.4 24 39.5 24 39.5Z"
            stroke="currentColor"
            strokeWidth="1.65"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 20.5V28.5M20.5 24.5H27.5"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            opacity="0.75"
          />
          <path
            d="M24 5.5V8"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            opacity="0.65"
          />
        </svg>
      );
  }
}

export function WhatsAppIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.33.16 11.9c0 2.1.55 4.14 1.6 5.95L0 24l6.32-1.66a11.86 11.86 0 0 0 5.74 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.45-8.42ZM12.07 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.75.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.52-5.27c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.13 1.03 7 2.9a9.83 9.83 0 0 1 2.9 7c0 5.46-4.44 9.89-9.89 9.89Zm5.43-7.41c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.34Z" />
    </svg>
  );
}

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
}

export function SafeImage({
  src,
  alt,
  className = '',
  fallbackTitle,
  ...rest
}: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#F5EBE0] via-[#EADBC8] to-[#DFCBB0] text-[#3E2723] p-6 text-center ${className}`}
        role="img"
        aria-label={alt || fallbackTitle || 'Soltar para Renacer 2027'}
      >
        <PillarSacredIcon type="lotus" className="w-10 h-10 text-[#C5A059] mb-2" />
        <span className="font-editorial text-lg font-semibold">
          {fallbackTitle || alt || 'Soltar para Renacer 2027'}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={className}
      {...rest}
    />
  );
}
