import Image from "next/image";
import Link from "next/link";

interface LogoIMGTemplateProps {
  imgPath: string;
  imgAlternative: string;
  imgWidth: number;
  imgHeight: number;
  imgHoverText?: string;
}

const LogoIMGTemplate: React.FC<LogoIMGTemplateProps> = ({
  imgPath,
  imgAlternative,
  imgWidth,
  imgHeight,
  imgHoverText = "Hover Text",
}) => {
  return (
    <>
      <div className="group relative h-full w-full">
        <div className="bg-side-bg p-1 w-full h-full rounded-md flex justify-center items-center">
          <Image
            src={imgPath}
            alt={imgAlternative}
            width={imgWidth}
            height={imgHeight}
          />
        </div>
        <div className="absolute hidden group-hover:block bg-text text-bg p-1 top-10 left-1/2 -translate-x-1/2 w-max z-10">
          <span>{imgHoverText}</span>
        </div>
      </div>
    </>
  );
};

export default LogoIMGTemplate;
