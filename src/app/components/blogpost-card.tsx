import Image from "next/image";

interface BlogpostCardProps {
  title: string;
  description: string;
  coverImagePath?: string;
  pinnedImagePath?: string;
  imageContainerClassName?: string;
  pinned?: boolean;
}

const BlogpostCard: React.FC<BlogpostCardProps> = ({
  title,
  description,
  coverImagePath = "/blog-img/default/cover-default.png",
  pinnedImagePath = "/blog-img/default/pinned-default.png",
  pinned = false,
  imageContainerClassName,
}) => {
  return (
    <>
      <div
        className={` w-full h-full p-2 flex flex-col ${
          pinned ? "col-span-full" : null
        }`}
      >
        <div className="h-full grid grid-cols-2 grid-rows-2 ">
          <div className="w-full h-full flex justify-center items-center row-span-2 p-10">
            <div
              className={`relative mt-2 ${
                imageContainerClassName
                  ? imageContainerClassName
                  : pinned
                  ? "w-full aspect-video"
                  : "w-full aspect-square"
              }`}
            >
              <Image
                src={pinned ? pinnedImagePath : coverImagePath}
                alt={`${title} Cover Image`}
                fill
                className="object-cover border-2 border-black"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="h-full w-full flex flex-col items-right justify-center row-span-2 pl-10 pr-10 gap-2">
            <h1 className="text-2xl font-bold">{title}</h1>
            <h1>{description}</h1>
            <div className="flex flex-row w-full col-span-2  justify-start">
              <button className="border-1 p-1">Read more..</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogpostCard;
