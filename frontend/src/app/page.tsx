import { HeroSection } from "@/components/heroSection/heroSection";
import { ImagesPreview } from "@/components/previewImages/previewImages";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <div>
        <div className="flex flex-col items-center justify-center w-full px-4 py-8">
          <h2 className="text-3xl">Some of Nice Places in world</h2>
        </div>

      <ImagesPreview/>
      </div>
    </>
  );
}
