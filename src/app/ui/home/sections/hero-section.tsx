"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function HeroSection({}) {
  return (
    <>
      <motion.div
        className="border-1 border-border w-full h-[80vh]"
        initial={{ opacity: 0 }}
        transition={{ ease: "easeIn", duration: 0.5 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="flex  flex-col p-1 justify-start align-end p-5 h-full">
          <p className="text-start text-2xl font-bold">Full-Stack Developer</p>
          <p className="italic text-xl">
            I build web apps with Next.js, TypeScript and Postgres. Before that,
            3 years shipping games at Tripledot and Touchten.
          </p>
          <p className="font-bold text-lg">Open to remote · UTC+9 </p>
        </div>
      </motion.div>
    </>
  );
}
