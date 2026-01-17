import Image from "next/image";
import Link from "next/link";
import ProjectCard from "./ui/home/project-card";
import WorkHistoryCard from "./ui/home/work-card";
import LogoIMGTemplate from "./ui/home/logo-image-template";
import { motion } from "motion/react";
import HeroSection from "./ui/home/sections/hero-section";
import ProjectSection from "./ui/home/sections/project-section";
import SkillsSection from "./ui/home/sections/skills-section";
import WorkSection from "./ui/home/sections/work-section";

export default function Home() {
  return (
    <div className="bg-bg h-fit text-text flex flex-col">
      <div className="border-l-1 border-r-1  border-border h-full w-full">
        <div className=" flex flex-col gap-4 h-full w-full p-2 overflow-auto">
          {/* CONTENT */}
          <HeroSection />
          <ProjectSection />
          <SkillsSection />
          <WorkSection />
        </div>
      </div>
    </div>
  );
}
