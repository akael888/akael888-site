"use client";

import { motion } from "motion/react";
import BlogpostGenerate from "../blogpost-generate";

export default function BlogSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <motion.div
        className="flex flex-col gap-4 p-4 h-full w-full"
        initial={{ opacity: 0 }}
        transition={{ ease: "easeIn", duration: 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className=" h-fit">
          <div className="flex justify-start align-center p-3 border-b-1 flex-shrink-0">
            <h1 className="text-2xl font-bold">Recent Post</h1>
          </div>
          <div className="p-1 grid grid-cols-2 grid-rows-3 h-fit">
            {children}
          </div>
        </div>
      </motion.div>
    </>
  );
}
