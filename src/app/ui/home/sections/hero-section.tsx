"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function HeroSection({}) {
  return (
    <>
      <motion.div
        className="border-1 border-border w-full h-[90vh]"
        initial={{ opacity: 0 }}
        transition={{ ease: "easeIn", duration: 0.5 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="flex  flex-col p-1 justify-start align-end p-5 h-full">
          <p className="text-start text-2xl font-bold">
            A Full Stack Developer
          </p>
          <p className="italic text-xl">
            with 3+ years Experience in Game Development Industry
          </p>
        </div>
      </motion.div>
    </>
  );
}
