"use client";

import { motion } from "motion/react";
import WorkHistoryCard from "../work-card";

export default function WorkSection({}) {
  return (
    <>
      <motion.div
        className="border-1 overflow-hidden flex flex-col"
        initial={{ opacity: 0 }}
        transition={{ ease: "easeIn", duration: 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex justify-start align-center p-3 border-b-1 flex-shrink-0">
          <h1 className="text-2xl font-bold">Professional Experience</h1>
        </div>
        <div className="flex flex-col p-2 overflow-y-auto flex-1 gap-1 overflow-x-hidden">
          <WorkHistoryCard
            role="Project Coordinator"
            duration="Jul 2025 - Aug 2025"
            company="Script Smelter Studios"
            details="Briefly worked closely with the CEO on several project initiatives"
          />
          <WorkHistoryCard
            role="Mid Cutscene Designer"
            duration="Mar 2023 - Feb 2025"
            company="Tripledot Studios"
            companyLink="www.linkedin.com/company/tripledot-studios"
            details="Designed in-game Isometric Cutscene and assisted the direct Lead on managing internal team"
          />
          <WorkHistoryCard
            role="Junior Cutscene Designer"
            duration="Oct 2022 - Mar 2023"
            company="Touchten Games"
            companyLink="www.linkedin.com/company/touchtengames"
            details="Further designed in-game Isometric Cutscene for Piper's Pet Cafe"
          />
          <WorkHistoryCard
            role="Cutscene Designer Intern and Apprentice"
            duration="Jan 2022 - Oct 2022"
            company="Touchten Games"
            companyLink="www.linkedin.com/company/touchtengames"
            details="Designed in-game Isometric Cutscene using in-house tools for the game Piper's Pet Cafe"
          />
        </div>
      </motion.div>
    </>
  );
}
