import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 md:mx-w-5xl overflow-hidden">
      <HeroSection />
      <AboutSection />
      <ProjectsSection/>
    </main>
  );
}
