"use client";

import { motion } from "motion/react";
import SkillCard from "../skill-card";
import { logoData } from "@/app/lib/image-data";

export default function SkillsSection({}) {
 

  return (
    <>
      <motion.div
        className="border-1 h-full flex flex-col"
        initial={{ opacity: 0 }}
        transition={{ ease: "easeIn", duration: 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex justify-start items-center p-2 border-b-1 overflow-auto h-max">
          <h1 className="text-2xl font-bold">Skills</h1>
        </div>
        <div className="w-full grow shrink-0">
          <div className="w-full h-full p-2 flex gap-2 grid grid-cols-2 grid-rows-2 ">
            <SkillCard
              skillTitle="Language"
              skillLogoData={[logoData.javascript, logoData.python]}
            />
            <SkillCard
              skillTitle="Front End"
              skillLogoData={[logoData.reactjs, logoData.nextjs]}
            />
            <SkillCard
              skillTitle="Back End"
              skillLogoData={[logoData.nodejs, logoData.expressjs]}
            />
            <SkillCard
              skillTitle="Cloud"
              skillLogoData={[logoData.vercel]}
            />
            <SkillCard
              skillTitle="Databases"
              skillLogoData={[logoData.mongodb]}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
}
