import { HeroSection } from "@/components/HeroSection";
import { ExperienceSplit } from "@/components/ExperienceSplit";
import { PhotoStrip } from "@/components/PhotoStrip";
import { AboutSection } from "@/components/AboutSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <HeroSection />

      {/* Curved divider or simple spacing */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <ExperienceSplit />

      <PhotoStrip />

      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <AboutSection />
    </div>
  );
}
