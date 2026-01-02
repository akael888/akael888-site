import Image from "next/image";
import Link from "next/link";
import ProjectCard from "./components/project-card";

export default function Home() {
  return (
    <div className="bg-white h-[90%] text-black flex flex-col">
      <div className="border-l-1 border-r-1  border-black bg-grey-100 h-full w-full">
        <div className=" grid grid-cols-2 grid-rows-4 gap-4 h-full w-full p-2">
          {/* CONTENT */}
          <div className="border-1 flex p-1">
            {/* <div className="flex justify-start align-center p-3 border-b-1">
              <h1>Summary</h1>
            </div> */}
            An aspiring Full Stack Developer, with 3+ years Experience in Game Development Industry.
          </div>
          <div className="border-1 row-span-3 col-start-1 row-start-2 overflow-hidden">
            <div className="flex justify-start align-center p-3 border-b-1 ">
              <h1>Projects</h1>
            </div>
            <div className="flex flex-col p-2 overflow-y-auto max-h-full gap-1">
              <ProjectCard
                name="Sentence Repeater"
                description="A tool to help you duplicate a sentence with Variable Definition features. That allows you to duplicate a sentence with specific rules."
                logoUrl="/sentence-rep-logo.png"
              />{" "}
              <ProjectCard
                name="Piper's Pet Cafe"
                description="Piper’s Pet Cafe is a casual mobile game that blends card-based solitaire puzzles with a unique cafe renovation theme."
                logoUrl="/ppc-logo.png"
              />
              <ProjectCard
                name="Test"
                description="Test123"
                logoUrl="/linkedin-dark.svg"
              />
              <ProjectCard
                name="Test"
                description="Test123"
                logoUrl="/linkedin-dark.svg"
              />
              <ProjectCard
                name="Test"
                description="Test123"
                logoUrl="/linkedin-dark.svg"
              />
              <ProjectCard
                name="Test"
                description="Test123"
                logoUrl="/linkedin-dark.svg"
              />
            </div>
          </div>
          <div className="border-1 row-span-3 col-start-2 row-start-1">
           <div className="flex justify-start align-center p-3 border-b-1">
              <h1>Work History</h1>
            </div>
          </div>
          <div className=" col-start-2 row-start-4">
            <div>
              <div className="flex justify-center">
                <h1>Contact</h1>
              </div>
              <div className="w-full">
                <Link href="https://linkedin.com/in/elgratiofc/">
                  <Image
                    src="/linkedin-dark.svg"
                    alt="Linkedin Logo"
                    width={50}
                    height={50}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
