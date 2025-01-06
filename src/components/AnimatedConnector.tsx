import React, { forwardRef, useRef } from "react";

import { cn } from "../utils/cn";
import { AnimatedBeam as AB } from "./AnimatedBeam";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return <div ref={ref}>{children}</div>;
});

Circle.displayName = "Circle";

export function AnimatedConnector() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex w-[40%] items-center justify-center rounded-lg bg-background py-10 "
      ref={containerRef}
    >
      <div className="flex size-full flex-col items-stretch">
        <div className="flex flex-row justify-between">
          <Circle ref={div1Ref}></Circle>
          <Circle ref={div2Ref}></Circle>
        </div>
      </div>
      <AB
        duration={4}
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div2Ref}
      />
    </div>
  );
}

const Icons = {
  user: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000000"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
};
