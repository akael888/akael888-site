import Link from "next/link";
import BlogpostCard from "../components/blogpost-card";

export default function blog({}) {
  return (
    <div className="bg-white h-[100vh] text-black flex flex-col">
      <div className="border-l-1 border-r-1  border-black bg-grey-100 h-full w-full">
        <div className="flex flex-col gap-4 p-4">
          <div className="border-1 ">
            <div className="flex justify-start align-center p-3 border-b-1 flex-shrink-0">
              <h1 className="text-2xl font-bold">Recent Posts..</h1>
            </div>
            <div className="p-1">
              <BlogpostCard
                title="Building a Variable-Based String Iteration Tool"
                description="A CRA Post Mortem"
                coverImagePath="/blog-images/PJ01/PJ01-screenshot.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
