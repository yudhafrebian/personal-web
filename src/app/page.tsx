

import {
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiWhatsappFill,
} from "react-icons/ri";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/section/hero";
import AboutMeSection from "@/components/section/about-me";
import SkillsSection from "@/components/section/skills";
import PortofolioSection from "@/components/section/portofolio";
import ExperienceSection from "@/components/section/experience";
import TestimonialsSection from "@/components/section/testimonals";
import ContactMeSection from "@/components/section/contact-me";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <PortofolioSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ContactMeSection />
    </>
  );
}
