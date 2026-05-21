import * as React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  gap?: number;
  pauseOnHover?: boolean;
  repeat?: number;
  reverse?: boolean;
  vertical?: boolean;
}

function Marquee(props: MarqueeProps) {
  const {
    children,
    className,
    duration = 40,
    delay = 0,
    gap = 1,
    pauseOnHover = false,
    repeat = 4,
    reverse = false,
    vertical = false,
    ...rest
  } = props;

  return (
    <div
      style={
        {
          "--marquee-duration": `${duration}s`,
          "--marquee-delay": `${delay}s`,
          "--marquee-gap": `${gap}rem`,
        } as React.CSSProperties
      }
      className={cn(
        "group flex overflow-hidden p-3",
        vertical ? "flex-col gap-[var(--marquee-gap)]" : "flex-row gap-[var(--marquee-gap)]",
        className
      )}
      {...rest}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn(
              "flex shrink-0 justify-around gap-[var(--marquee-gap)] [animation-delay:var(--marquee-delay)]",
              vertical
                ? "animate-marquee-vertical flex-col"
                : "animate-marquee-horizontal flex-row",
              pauseOnHover && "group-hover:[animation-play-state:paused]",
              reverse && "[animation-direction:reverse]"
            )}
          >
            {children}
          </div>
        ))}
    </div>
  );
}

export { Marquee, type MarqueeProps };
