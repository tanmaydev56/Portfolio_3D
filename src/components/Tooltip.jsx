"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip.tsx";
const people = [
  {
    id: 1,
    name: "Instagram",
    designation: "Link",
    image:
      "/instagram.svg",
  },
  {
    id: 2,
    name: "Github",
    designation: "Link",
    image:
      "/github.svg",
  },
  {
    id: 3,
    name: "LinkedIn",
    designation: "Link",
    image:
      "/linkedIn.svg",
  },
 
];

export function AnimatedTooltipPreview() {
  return (
    (<div className="flex flex-row items-center justify-center  w-full">
      <AnimatedTooltip items={people} />
    </div>)
  );
}
