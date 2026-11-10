import { ReactLenis } from "lenis/react";

import type { ReactNode } from "react";

interface SmoothScrollProps {
  children: ReactNode;
}

export const SmoothScroll = ({ children }: SmoothScrollProps) => {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,

        // Explicitly keep Lenis page scrolling vertical
        orientation: "vertical",
        gestureOrientation: "vertical",
      }}
    >
      {children}
    </ReactLenis>
  );
};
