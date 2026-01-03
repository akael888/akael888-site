import Image from "next/image";
import Link from "next/link";
import LogoIMGTemplate from "./logo-image-template";

interface ProjectCardProps {
  name: string;
  description: string;
  logoUrl: string;
  techStacks?: string[];
  techStacksHoverText?: string[];
  appUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  logoUrl,
  techStacks = ["/next.svg"],
  techStacksHoverText = ["Hover Text"],
  appUrl,
}) => {
  return (
    <>
      <div>
        <div className="border-1 border-white hover:border-black">
          <div className="grid grid-row-2 grid-cols-3 p-2">
            <div className=" row-span-2 flex justify-center items-center p-2 ">
              <div className="w-fit border-1 p-2">
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
            <div className="flex align-center p-2 w-[60%] gap-1">
              {techStacks.map((stack, index) => (
                <div key={index} className="rounded-10 p-1 flex justify-center">
                  <LogoIMGTemplate
                    imgPath={stack}
                    imgAlternative="Stack Logo"
                    imgWidth={30}
                    imgHeight={30}
                    imgHoverText={techStacksHoverText[index]}
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-row justify-end items-center gap-2">
              {appUrl ? (
                <Link
                  className="border-1 w-[20%] p-1 hover:bg-gray-600 justify-center items-center flex"
                  href={`https://${appUrl}`}
                >
                  App
                </Link>
              ) : null}
              <button className="border-1 w-[20%] p-1 hover:bg-gray-600 justify-center items-center flex">
                Blog
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
