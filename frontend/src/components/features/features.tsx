"use client";

import { CloudRain, Fingerprint, Globe2, Rocket } from "lucide-react";
import React from "react";

const features = [
  {
    title: "Accurate Detection",
    description: "High-precision satellite image classification for various terrains and landscapes",
    icon: <Fingerprint className="w-6 h-6" />,
  },
  {
    title: "Global Coverage",
    description: "Analyze satellite imagery from any location around the world",
    icon: <Globe2 className="w-6 h-6" />,
  },
  {
    title: "Real-time Processing",
    description: "Fast and efficient processing of satellite imagery for instant results",
    icon: <Rocket className="w-6 h-6" />,
  },
  {
    title: "Weather Independent",
    description: "Reliable analysis regardless of weather conditions or time of day",
    icon: <CloudRain className="w-6 h-6" />,
  },
];

export function Features() {
  return (
    <section className="py-16 px-4 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
            Powerful Features
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Our advanced satellite image classification system offers cutting-edge features
            to help you analyze and understand different landscapes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-white dark:bg-neutral-800/50 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
