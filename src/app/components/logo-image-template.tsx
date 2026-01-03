import Image from "next/image";
import Link from "next/link";

interface LogoIMGTemplateProps {
  imgPath: string;
  imgAlternative: string;
  imgWidth: number;
  imgHeight: number;
}

const LogoIMGTemplate: React.FC<LogoIMGTemplateProps> = ({
  imgPath,
  imgAlternative,
  imgWidth,
  imgHeight,
}) => {
  return (
    <>
      <div className="bg-gray-100 p-1 w-fit rounded-10 flex justify-center items-center">
        <Image
          src={imgPath}
          alt={imgAlternative}
          width={imgWidth}
          height={imgHeight}
        />
      </div>
    </>
  );
};

export default LogoIMGTemplate;
