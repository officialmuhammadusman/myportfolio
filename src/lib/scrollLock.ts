/** Reference-counted body scroll lock — safe when multiple overlays are open. */
let lockCount = 0;
let savedOverflow = "";

export function lockBodyScroll(): () => void {
  if (typeof document === "undefined") return () => {};

  if (lockCount === 0) {
    savedOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  }
  lockCount += 1;

  return () => {
    lockCount = Math.max(0, lockCount - 1);
    if (lockCount === 0) {
      document.body.style.overflow = savedOverflow;
    }
  };
}
