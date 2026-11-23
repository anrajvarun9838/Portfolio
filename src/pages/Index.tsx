import { useEffect } from 'react';
import { MotionConfig } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/sections/HeroSection';
import AboutSection from '@/sections/AboutSection';
import SkillsSection from '@/sections/SkillsSection';
import ExperienceSection from '@/sections/ExperienceSection';
import ProjectsSection from '@/sections/ProjectsSection';
import EducationSection from '@/sections/EducationSection';
import ContactSection from '@/sections/ContactSection';
import JsonLdSchema from '@/components/JsonLdSchema';
import profile from '@/data/profile';

const Index = () => {
  // Set page title and metadata
  useEffect(() => {
    document.title = `${profile.basics.name} | ${profile.basics.title}`;
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <JsonLdSchema />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </MotionConfig>
  );
};

export default Index;
