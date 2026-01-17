"use client";

import LogoIMGTemplate from "./logo-image-template";
import { motion } from "motion/react";

interface SkillCardProps {
  skillTitle: string;
  skillLogoData: {
    imagePath: string;
    imageAlternative: string;
    imageHoverText: string;
  }[];
}

const SkillCard: React.FC<SkillCardProps> = ({ skillTitle, skillLogoData }) => {
  const skillsLogoSize = 40;
  return (
    <>
      <motion.div
        className="w-full border-1 border-border p-3 gap-1 flex flex-col h-full shrink-0"
        initial={{ opacity: 0, y: 20 }}
        transition={{ ease: "easeIn", duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div>
          <p className="font-bold">{skillTitle}</p>
        </div>
        <div className="grid grid-row-2 grid-cols-3 p-1 w-fit gap-2">
          {skillLogoData.map((data, index) => (
            <LogoIMGTemplate
              key={index}
              imgPath={data.imagePath}
              imgAlternative={data.imageAlternative}
              imgWidth={skillsLogoSize}
              imgHeight={skillsLogoSize}
              imgHoverText={data.imageHoverText}
            />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SkillCard;
