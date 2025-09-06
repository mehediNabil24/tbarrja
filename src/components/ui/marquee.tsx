"use client"

import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface MarqueeProps {
  children: ReactNode
  reverse?: boolean
  pauseOnHover?: boolean
  className?: string
  speed?: number // in seconds
}

export function Marquee({
  children,
  reverse = false,
  pauseOnHover = true,
  className,
  speed = 30,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden w-full",
        pauseOnHover && "[&:hover_.marquee-track]:[animation-play-state:paused]",
        className
      )}
    >
      <div
        className={cn(
          "flex w-max gap-6 marquee-track",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {children}
        {children} {/* Duplicate for seamless loop */}
      </div>
    </div>
  )
}
