import Link from "next/link";
import BlogpostCard from "../components/blogpost-card";

export default function blog({}) {
  return (
    <div className="bg-white h-fit text-black flex flex-col min-h-screen">
      <div className="border-l-1 border-r-1  border-black bg-grey-100 h-full w-full">
        <div className="flex flex-col gap-4 p-4 h-full w-full">
          <div className="border-1 h-fit">
            <div className="flex justify-start align-center p-3 border-b-1 flex-shrink-0">
              <h1 className="text-2xl font-bold">Recent Posts..</h1>
            </div>
            <div className="p-1 grid grid-cols-2 grid-rows-3 h-fit">
              <BlogpostCard
                title="Building a Variable-Based String Iteration Tool"
                description="A CRA Post Mortem"
                coverImagePath="/sentence-rep-logo.png"
                pinnedImagePath="/blog-img/PJ01/PJ01-screenshot.png"
                // imageContainerClassName="w-[50%] aspect-square"
                pinned={true}
              />

              <BlogpostCard
                title="Designing Blogpost-style Personal Wesbite"
                description="A CRA Post Mortem"
                coverImagePath="/blog-img/PJ02/PJ02-logo.png"
                // pinnedImagePath="/blog-img/PJ01/PJ01-screenshot.png"
                // imageContainerClassName="w-[50%] aspect-square"
                pinned={false}
              />

              <BlogpostCard
                title="Piper's Pet Cafe"
                description="PPC"
                coverImagePath="/blog-img/PJ03/PJ03-logo.png"
                type="Game Development"
                typeColor="amber"
                // pinnedImagePath="/blog-img/PJ01/PJ01-screenshot.png"
                // imageContainerClassName="w-[50%] aspect-square"
                pinned={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
