/** Logomark do Blink: a pálpebra que fecha — a piscada do nome. */
export function BlinkMark({ size = 19 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M2.5 13.5c3.2 4.2 15.8 4.2 19 0" />
      <path d="M5.4 17.2 4.2 19.4M12 18.6V21M18.6 17.2l1.2 2.2" />
    </svg>
  );
}
