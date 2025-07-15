import { HeroSection } from "@/components/heroSection/heroSection";
import { ImagesPreview } from "@/components/previewImages/previewImages";
import { Features } from "@/components/features/features";
import { HowItWorks } from "@/components/howItWorks/howItWorks";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      
      {/* Features Section */}
      <Features />
      
      {/* How It Works Section */}
      <HowItWorks />
      
      {/* Preview Section */}
      <section className="py-16 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="flex flex-col items-center justify-center w-full px-4 pb-8">
          <h2 className="text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
            Explore Beautiful Places
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-center max-w-2xl mb-8">
            Discover the diversity of landscapes our AI can identify from satellite imagery
          </p>
        </div>
        <ImagesPreview />
      </section>
    </main>
  );
}
