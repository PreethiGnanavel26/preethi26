"use client";

import { skills } from "@/app/data";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// We need to use a client component with useEffect to avoid hydration mismatches
// since we are using Math.random() for positioning and animation delays.
export function FallingToolsBackground() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  // We'll duplicate the icons to have more of them on screen
  const animatedIcons = [...skills, ...skills, ...skills, ...skills];

  return (
    <div
      className="fixed left-0 top-0 -z-10 h-full w-full overflow-hidden"
      aria-hidden="true"
    >
      <div className="relative h-full w-full">
        {animatedIcons.map((skill, index) => (
          <div
            key={index}
            className="animate-fall absolute"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          >
            <skill.icon
              className={cn(
                "h-6 w-6 text-foreground/5 opacity-50",
                `icon-${index % 5}`
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
