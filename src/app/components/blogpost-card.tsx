import Image from "next/image";

interface BlogpostCardProps {
  title: string;
  description: string;
  coverImagePath: string;
  imageContainerClassName?: string;
}

const BlogpostCard: React.FC<BlogpostCardProps> = ({
  title,
  description,
  coverImagePath,
  imageContainerClassName = "w-full aspect-video",
}) => {
  return (
    <>
      <div className=" p-2 grid grid-cols-2 grid-rows-1">
        <div className="flex flex-col">
          <div className="h-full w-full flex flex-col items-start justify-center">
            <h1 className="text-2xl font-bold">{title}</h1>
            <h1>{description}</h1>
            <div className="flex flex-row">
              <button>Read more..</button>
            </div>
          </div>
        </div>

        <div className={`relative mt-2 ${imageContainerClassName}`}>
          <Image
            src={coverImagePath}
            alt={`${title} Cover Image`}
            fill
            className="object-cover border-2 border-black"
            sizes="(max-width: 768px) 100vw, 300px"
          />
        </div>
      </div>
    </>
  );
};

export default BlogpostCard;
