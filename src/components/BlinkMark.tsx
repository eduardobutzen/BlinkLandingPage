/** Logomark do Blink: o ícone do app (o Pensador em quadrado escuro). */
export function BlinkMark({ size = 32 }: { size?: number }) {
  return (
    <img
      src="/assets/brand/blink_logo.png"
      width={size}
      height={size}
      alt=""
      aria-hidden="true"
      decoding="async"
    />
  );
}
