"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./ui/text-reveal-card";

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center bg-[#0E0E10] min-h-screen px-4 sm:px-8 lg:px-16 overflow-x-hidden">
      <div className="w-full max-w-full sm:max-w-xl lg:max-w-2xl">
        <TextRevealCard
          text="You know the business"
          revealText="I know the chemistry "
          className="w-full h-auto"
        >
          <TextRevealCardTitle className="text-center text-white text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
            Sometimes, you just need to see it.
          </TextRevealCardTitle>
          <TextRevealCardDescription className="mt-4 text-center text-slate-300 text-sm sm:text-base md:text-lg font-light">
            This is a text reveal card. Hover over the card to reveal the hidden
            text.
          </TextRevealCardDescription>
        </TextRevealCard>
      </div>
    </div>
  );
}
