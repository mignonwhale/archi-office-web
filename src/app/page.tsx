import HeroSection from "@/components/sections/HeroSection";
import ProjectGallery from "@/components/sections/ProjectGallery";
import Philosophy from "@/components/sections/Philosophy";
import Expertise from "@/components/sections/Expertise";
import NewsSection from "@/components/sections/NewsSection";
import SocialMedia from "@/components/sections/SocialMedia";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProjectGallery />
      <Philosophy />
      <Expertise />
      <NewsSection />
      <SocialMedia />
    </main>
  );
}

