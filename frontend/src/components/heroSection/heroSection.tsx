"use client";

import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function HeroSection() {

  const router = useRouter();
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <div className="relative z-30 flex flex-col items-center justify-center">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative font-bold tracking-tight">
          Satellite AI
        </h2>
        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
          Get the best results of detecting types of areas from satellite images like desert, plain etc.
        </p>
        <div className="flex flex-row justify-center text-center items-center m-4 gap-4">
          <Button variant="default" className="relative p-2 cursor-pointer hover:opacity-90" onClick={() => router.push('/detect')}>
            Get Started 
          </Button>
          <Link 
            href="https://www.kaggle.com/datasets/mahmoudreda55/satellite-image-classification" 
            className="p-2 cursor-pointer hover:underline text-neutral-700 dark:text-neutral-300 hover:opacity-90"
          >
            View Data
          </Link>
        </div>
      </div>
    </BackgroundLines>
  );
}
