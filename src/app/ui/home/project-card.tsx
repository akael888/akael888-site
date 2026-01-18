"use client";

import Image from "next/image";
import Link from "next/link";
import LogoIMGTemplate from "./logo-image-template";
import { motion } from "motion/react";

interface ProjectCardProps {
  name: string;
  description: string;
  logoUrl?: string;
  techStacks: { imagePath: string; imageHoverText: string }[];
  appUrl?: string;
  blogUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  logoUrl = "/no-img-provided.png",
  techStacks,
  appUrl,
  blogUrl,
}) => {
  return (
    <>
      <motion.div
        className=""
        initial={{ opacity: 0, x: 20 }}
        transition={{ ease: "easeIn", duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-row-2 grid-cols-3 p-2">
          <div className=" row-span-2 flex justify-center items-center p-2 ">
            <div className="w-fit border-1 border-border p-2 bg-white">
              <Image
                src={logoUrl}
                alt="Linkedin Logo"
                width={100}
                height={100}
              />
            </div>
          </div>

          <div className="col-span-2 flex justify-start items-center">
            <h1 className="text-xl font-bold">{name}</h1>
          </div>
          <div className="col-span-2 flex justify-start items-center">
            {description}
          </div>
        </div>
        <div className="w-full max-h-[100px] p-3 grid grid-row-1 grid-cols-2 justify-center">
          <div className="flex justify-left align-center p-2 w-[60%] gap-1">
            {techStacks.map((stack, index) => (
              <div
                key={index}
                className="rounded-10 p-1 flex justify-center align-center"
              >
                <LogoIMGTemplate
                  imgPath={stack.imagePath}
                  imgAlternative="Stack Logo"
                  imgWidth={30}
                  imgHeight={30}
                  imgHoverText={stack.imageHoverText}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-row md:justify-end justify-around items-center gap-2">
            {appUrl ? (
              <Link
                className="border-1 min-w-[20%] p-1 pr-2 hover:border-border border-bg justify-end items-center flex underline italic"
                href={`https://${appUrl}`}
              >
                App
              </Link>
            ) : null}
            {blogUrl ? (
              <Link
                className="border-1 min-w-[20%] p-1 pr-2 hover:border-border border-bg justify-end items-center flex underline italic"
                href={`${blogUrl}`}
              >
                Blogpost
              </Link>
            ) : null}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectCard;
