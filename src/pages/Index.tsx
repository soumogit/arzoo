import { useTheme } from "@/hooks/useTheme";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import AchievementsSection from "@/components/AchievementsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import AnimatedSection from "@/components/AnimatedSection";

const Index = () => {
  const { isDark, toggle } = useTheme();

  return (
    <div className="min-h-screen">
      <Navbar isDark={isDark} toggle={toggle} />
      <HeroSection />
      <AnimatedSection><AboutSection /></AnimatedSection>
      <AnimatedSection delay={0.05}><EducationSection /></AnimatedSection>
      <AnimatedSection><SkillsSection /></AnimatedSection>
      <AnimatedSection delay={0.05}><ExperienceSection /></AnimatedSection>
      <AnimatedSection><ProjectsSection /></AnimatedSection>
      <AnimatedSection delay={0.05}><AchievementsSection /></AnimatedSection>
      <AnimatedSection><CertificationsSection /></AnimatedSection>
      <AnimatedSection delay={0.05}><ContactSection /></AnimatedSection>
      <AnimatedSection>
        <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
          © 2025 Arzoo Gupta. All rights reserved.
        </footer>
      </AnimatedSection>
    </div>
  );
};

export default Index;
