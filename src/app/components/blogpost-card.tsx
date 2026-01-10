import Image from "next/image";
import Link from "next/link";

interface BlogpostCardProps {
  title: string;
  description: string;
  blogPath: string;
  content?: string;
  date?: string;
  type?: string;
  typeColor?: string;
  coverImagePath?: string;
  pinnedImagePath?: string;
  imageContainerClassName?: string;

  pinned?: boolean;
}

const BlogpostCard: React.FC<BlogpostCardProps> = ({
  title,
  description,
  blogPath = "/",
  content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis egestas lacus at consectetur. Cras venenatis aliquam erat vitae pharetra.",
  date = "22 December 2025",
  type = "Web Dev.",
  typeColor = "green",
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
        <div className="h-full grid grid-cols-3 grid-rows-2 w-full">
          <div className="w-full h-full flex justify-center items-center row-span-2 p-2 col-span-2 ">
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

          <div className="grid grid-rows-3 grid-cols-2 w-full h-full row-span-2 gap-4 pl-2">
            <div
              className={`w-full col-span-full flex flex-col justify-center items-start h-full ${
                !pinned ? "row-span-2" : ""
              }`}
            >
              <h1 className="text-2xl font-bold">{title}</h1>
              <h1>{description}</h1>
            </div>

            {pinned ? (
              <div className="w-full row-start-2 col-span-full">
                <h1>{content}..</h1>
              </div>
            ) : null}

            <div className="row-start-3 flex justify-start items-center w-full h-full">
              <div className="p-1 w-fit text-sm whitespace-nowrap">
                <div
                  className={`p-1 bg-black hover:bg-${typeColor}-700 w-fit rounded-md text-white italic`}
                >
                  {type}
                </div>
              </div>
            </div>

            <div className="w-full h-full row-start-3 col-start-2 flex justify-end items-center">
              <Link
                href={blogPath}
                className="border-1 border-white hover:border-black h-fit w-full flex items-center justify-end p-1"
              >
                Read
              </Link>
            </div>
          </div>
          {/* <div className="h-full w-full row-span-2 pl-5 pr-10">
            <div className="h-full w-full flex flex-col items-left justify-center gap-2">
              <h1 className="text-2xl font-bold">{title}</h1>
              <h1>{description}..</h1>

              <div className="flex flex-col justify-start items-start w-full">
                <div className="p-1 h-full w-fit text-sm whitespace-nowrap">
                  <div
                    className={`p-1 bg-${typeColor}-700 w-fit rounded-md text-white italic`}
                  >
                    {type}
                  </div>
                </div>
              </div>
            </div>
            <Link href="/" className="">
              Read
            </Link>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default BlogpostCard;
