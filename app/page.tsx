import { Preview } from "@/components/hero-demo";
import { SkillsSection } from "@/components/skills-section";
import ExperienceSection from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { PortfolioNavbar } from "@/components/layout/portfolio-navbar";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <>
      <PortfolioNavbar />
      <main className="min-h-screen bg-black">
        <Preview />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
