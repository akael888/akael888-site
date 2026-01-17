"use client";

import { logoData } from "@/app/lib/image-data";
import ProjectCard from "../project-card";
import { motion } from "motion/react";

export default function ProjectSection({}) {
  return (
    <>
      <motion.div
        className="border-1 border-border overflow-hidden flex flex-col "
        initial={{ opacity: 0 }}
        transition={{ ease: "easeIn", duration: 0.5 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex justify-start align-center p-3 border-border border-b-1 flex-shrink-0">
          <h1 className="text-2xl font-bold">Projects</h1>
        </div>
        <div className="flex flex-col pl-2 pr-2 overflow-y-auto overflow-x-hidden flex-1 gap-2 pt-10 pb-10">
          <ProjectCard
            name="ProPresenter Sim"
            description="In Progress.."
            // logoUrl="/efc-logo.png"
            techStacks={[logoData.nextjs, logoData.tailwindcss]}
            // appUrl="elgratiofc.vercel.app"
            // blogUrl="/blog/personal-site"
          />
          <ProjectCard
            name="Personal Website"
            description="A Blogpost-style Personal Website that conveys how El developed his Projects"
            logoUrl="/efc-logo.png"
            techStacks={[logoData.nextjs, logoData.tailwindcss]}
            // appUrl="elgratiofc.vercel.app"
            blogUrl="/blog/personal-site"
          />
          <ProjectCard
            name="Sentence Repeater"
            description="A tool to help you duplicate a sentence with Variable Definition features. That allows you to duplicate a sentence with specific rules."
            logoUrl="/sentence-rep-logo.png"
            techStacks={[
              logoData.reactjs,
              logoData.nodejs,
              logoData.expressjs,
              logoData.tailwindcss,
              logoData.mongodb,
            ]}
            appUrl="sentence-repeater.vercel.app"
            blogUrl="/blog/sentence-repeater"
          />
          <ProjectCard
            name="Piper's Pet Cafe"
            description="A casual mobile game that blends card-based solitaire puzzles with a unique cafe renovation theme."
            logoUrl="/ppc-logo.png"
            techStacks={[logoData.unity]}
            appUrl="apps.apple.com/ph/app/pipers-pet-cafe-solitaire/id1554300372"
            blogUrl="/blog/pipers-pet-cafe"
          />
        </div>
      </motion.div>
    </>
  );
}
