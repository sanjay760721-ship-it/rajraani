import Image from "next/image";

import { PLACEHOLDER_WASH, toneFor } from "./Frame";
import type { CartLine } from "./cart-context";

/**
 * A cart line's photograph, or its colour wash when the line has none.
 *
 * Lines saved before photographs were carried in the cart have no `src`, and
 * still draw the wash rather than an empty box.
 */
export function CartThumb({ line, className = "" }: { line: CartLine; className?: string }) {
  return (
    <div
      role={line.src ? undefined : "img"}
      aria-label={line.src ? undefined : line.alt}
      className={`relative shrink-0 overflow-hidden border border-rule ${className}`}
      style={{ backgroundColor: toneFor(line.colourSlug), backgroundImage: line.src ? undefined : PLACEHOLDER_WASH }}
    >
      {line.src ? <Image src={line.src} alt={line.alt} fill sizes="80px" className="object-cover" /> : null}
    </div>
  );
}
