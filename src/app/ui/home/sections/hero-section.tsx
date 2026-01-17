"use client";

import { motion } from "motion/react";

export default function HeroSection({}) {
  return (
    <>
      <motion.div
        className="border-1 w-full h-[90vh]"
        initial={{ opacity: 0 }}
        transition={{ ease: "easeIn", duration: 1 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="flex  flex-col p-1 justify-end align-end p-5">
          <p className="text-start text-2xl font-bold">
            An aspiring Full Stack Developer
          </p>
          <p className="italic text-xl">
            with 3+ years Experience in Game Development Industry
          </p>
        </div>
      </motion.div>
    </>
  );
}
