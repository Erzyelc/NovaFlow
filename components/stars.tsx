"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { Compare } from "./ui/compare";
export function Stars() {
  return (
    <div className="h-full rounded-md bg-neutral-900 flex flex-col items-center justify-center relative w-full">
      <Compare
        firstImage="../volt1.png"
        secondImage="../volt2.png"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[800px] w-[800px] md:h-[1000px] md:w-[1000px]"
        slideMode="hover"
      />
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
