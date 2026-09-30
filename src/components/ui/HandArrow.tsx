interface HandArrowProps {
  className?: string
  direction?: 'down-right' | 'down-left' | 'up-right' | 'curved'
}

export function HandArrow({ className = '', direction = 'down-right' }: HandArrowProps) {
  if (direction === 'curved') {
    return (
      <svg
        className={className}
        width="38"
        height="28"
        viewBox="0 0 38 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M2 4C10 3 24 6 30 18M30 18L24 18M30 18L32 11"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  if (direction === 'down-left') {
    return (
      <svg
        className={className}
        width="34"
        height="26"
        viewBox="0 0 34 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M32 2C24 4 10 9 4 20M4 20L10 20M4 20L3 13"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  // Default down-right curved arrow
  return (
    <svg
      className={className}
      width="34"
      height="26"
      viewBox="0 0 34 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M2 3C8 4 22 8 28 20M28 20L22 20M28 20L30 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
