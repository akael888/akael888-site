import Image from "next/image";

interface ProjectCardProps {
  name: string;
  description: string;
  logoUrl: string;
  techStacks?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  logoUrl,
  techStacks,
}) => {
  return (
    <>
      <div>
        <div className="border-1">
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
              <h1>{name}</h1>
            </div>
            <div className="col-span-2 flex justify-start items-center">
              {description}
            </div>
          </div>
          <div className="w-full p-3">
            <button className="border-1 w-full p-1">OPEN</button>
          </div>
        </div>
        <div className="flex justify-end align-center p-2">
          <div className="border-1 rounded-10 p-1">
            <Image src={logoUrl} alt="Linkedin Logo" width={30} height={30} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
