import Image from "next/image";
import Link from "next/link";
import ProjectCard from "./components/project-card";
import WorkHistoryCard from "./components/work-card";

export default function Home() {
  return (
    <div className="bg-white h-[90%] text-black flex flex-col">
      <div className="border-l-1 border-r-1  border-black bg-grey-100 h-full w-full">
        <div className=" grid grid-cols-2 grid-rows-4 gap-4 h-full w-full p-2">
          {/* CONTENT */}
          <div className="border-1 w-full h-full">
            {/* <div className="flex justify-start align-center p-3 border-b-1">
              <h1>Summary</h1>
            </div> */}
            <div className="flex  flex-col p-1 justify-end align-end p-5">
              <p className="text-start text-2xl font-bold">
                An aspiring Full Stack Developer
              </p>
              <p className="italic text-xl">with 3+ years Experience in Game Development Industry</p>
            </div>
          </div>
          <div className="border-1 row-span-3 col-start-1 row-start-2 overflow-hidden flex flex-col">
            <div className="flex justify-start align-center p-3 border-b-1 flex-shrink-0">
              <h1 className="text-2xl font-bold">Professional Experience</h1>
            </div>
            <div className="flex flex-col p-2 overflow-y-auto flex-1 gap-1">
              <WorkHistoryCard
                role="Project Coordinator"
                duration="Jul 2025 - Aug 2025"
                company="Script Smelter Studios"
                details="Designed in-game Isometric Cutscene using in-house tools."
              />
              <WorkHistoryCard
                role="Mid Cutscene Designer"
                duration="Mar 2023 - Feb 2025"
                company="Tripledot Studios"
                companyLink="www.linkedin.com/company/tripledot-studios"
                details="Designed in-game Isometric Cutscene using in-house tools."
              />
              <WorkHistoryCard
                role="Junior Cutscene Designer"
                duration="Oct 2022 - Mar 2023"
                company="Touchten Games"
                companyLink="www.linkedin.com/company/touchtengames"
                details="Designed in-game Isometric Cutscene using in-house tools."
              />
              <WorkHistoryCard
                role="Cutscene Designer Intern and Apprentice"
                duration="Jan 2022 - Oct 2022"
                company="Touchten Games"
                companyLink="www.linkedin.com/company/touchtengames"
                details="Designed in-game Isometric Cutscene using in-house tools for the game Piper's Pet Cafe"
              />
            </div>
          </div>
          <div className="border-1 row-span-3 col-start-2 row-start-1 overflow-hidden flex flex-col">
            <div className="flex justify-start align-center p-3 border-b-1 flex-shrink-0">
              <h1 className="text-2xl font-bold">Projects</h1>
            </div>
            <div className="flex flex-col p-2 overflow-y-auto flex-1 gap-2 ">
              <ProjectCard
                name="Personal Website"
                description="A Blogpost-style Portofolio Website that conveys how El developed his Projects"
                logoUrl="/efc-logo.png"
                techStacks={["/next.svg", "/tailwind-logo.svg"]}
                appUrl="elgratiofc.vercel.app"
              />
              <ProjectCard
                name="Sentence Repeater"
                description="A tool to help you duplicate a sentence with Variable Definition features. That allows you to duplicate a sentence with specific rules."
                logoUrl="/sentence-rep-logo.png"
                techStacks={[
                  "/react-logo.svg",
                  "/expressjs-logo.svg",
                  "/tailwind-logo.svg",
                ]}
                appUrl="sentence-repeater.vercel.app"
              />
              <ProjectCard
                name="Piper's Pet Cafe"
                description="A casual mobile game that blends card-based solitaire puzzles with a unique cafe renovation theme."
                logoUrl="/ppc-logo.png"
                techStacks={["/unity-icon.svg"]}
                appUrl="apps.apple.com/ph/app/pipers-pet-cafe-solitaire/id1554300372"
              />
              {/* <ProjectCard
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
              /> */}
            </div>
          </div>
          <div className=" col-start-2 row-start-4">
            <div>
              <div className="flex justify-start items-center p-2">
                <h1 className="text-xl font-bold">Contact</h1>
              </div>
              <div className="w-full p-3 flex gap-10">
                <Link href="https://linkedin.com/in/elgratiofc/">
                  <Image
                    src="/linkedin-dark.svg"
                    alt="Linkedin Logo"
                    width={25}
                    height={25}
                  />
                </Link>
                <Link href="https://linkedin.com/in/elgratiofc/">
                  <Image
                    src="/linkedin-dark.svg"
                    alt="Linkedin Logo"
                    width={25}
                    height={25}
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
