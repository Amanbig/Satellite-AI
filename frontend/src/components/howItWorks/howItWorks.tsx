"use client";

import { ArrowRight } from "lucide-react";
import React from "react";

const steps = [
  {
    number: "01",
    title: "Upload Image",
    description: "Upload your satellite image in any common format (PNG, JPG, WEBP)",
  },
  {
    number: "02",
    title: "Process",
    description: "Our AI model analyzes the image using advanced machine learning algorithms",
  },
  {
    number: "03",
    title: "Get Results",
    description: "Receive accurate classification of the terrain or landscape type",
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
            How It Works
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Simple and efficient process to get accurate results in just three steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-6 rounded-lg bg-white dark:bg-neutral-800/50 shadow-lg group hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">
                <span className="text-4xl font-bold text-blue-500 dark:text-blue-400">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                {step.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-blue-500 dark:text-blue-400" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
