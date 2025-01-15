"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";

export function AnimatedPinDemo() {
  return (
    <div className="h-full w-full flex flex-wrap items-center justify-center gap-6 p-4 mt-10"> {/* Added margin-top here */}
      {/* First Pin */}
      <PinContainer
        title="/ui.aceternity.com"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-full sm:w-[20rem] h-[20rem] md:w-[25rem] lg:w-[30rem]">
          <h3 className="max-w-xs pb-2 m-0 font-bold text-base text-slate-100">
            Aceternity UI
          </h3>
          <div className="text-base m-0 p-0 font-normal">
            <span className="text-slate-500 ">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>

      {/* Second Pin */}
      <PinContainer
        title="/ui.aceternity.com"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-full sm:w-[20rem] h-[20rem] md:w-[25rem] lg:w-[30rem]">
          <h3 className="max-w-xs pb-2 m-0 font-bold text-base text-slate-100">
            Aceternity UI
          </h3>
          <div className="text-base m-0 p-0 font-normal">
            <span className="text-slate-500 ">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    </div>
  );
}
