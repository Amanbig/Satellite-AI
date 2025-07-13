import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { Button } from "../ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Satellite AI
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        Get the best results of detecting types of areas from satellite images like desert, plain etc.
      </p>
      <div className="flex flex-row justify-center text-center items-center m-4 gap-4">
        <Button variant="default" className="p-2 curos">
          Get Started 
        </Button>
        <Button variant="outline" className="p-2 cursor-pointer">
          View Data
        </Button>
      </div>
    </BackgroundLines>
  );
}
