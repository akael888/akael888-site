import Link from "next/link";
import BlogpostCard from "../ui/blogpost/blogpost-card";

import { sortBlogpost } from "../lib/utils";

const blogPostArray = await sortBlogpost(false);

export default function Page({}) {
  return (
    <div className="bg-white h-fit text-black flex flex-col min-h-screen">
      <div className="border-l-1 border-r-1  border-black bg-grey-100 h-full w-full">
        <div className="flex flex-col gap-4 p-4 h-full w-full">
          <div className="border-1 h-fit">
            <div className="flex justify-start align-center p-3 border-b-1 flex-shrink-0">
              <h1 className="text-2xl font-bold">Recent Posts..</h1>
            </div>
            <div className="p-1 grid grid-cols-2 grid-rows-3 h-fit">
              {blogPostArray?.map((blogPost) => (
                <BlogpostCard
                  key={blogPost.data.id}
                  title={blogPost.data.title}
                  description={blogPost.data.description}
                  coverImagePath={blogPost.data.coverImgPath}
                  pinnedImagePath={blogPost.data.pinnedImgPath}
                  blogPath={blogPost.data.blogPath}
                  // imageContainerClassName="w-[50%] aspect-square"
                  pinned={blogPost.data.pinned}
                  type={blogPost.data.type}
                  content={blogPost.content}
                />
              ))}
              {/* <BlogpostCard
                title="Building a Variable-Based String Iteration Tool"
                description="A CRA Post Mortem"
                coverImagePath="/sentence-rep-logo.png"
                pinnedImagePath="/blog-img/PJ01/PJ01-screenshot.png"
                blogPath="/blog/sentence-repeater"
                // imageContainerClassName="w-[50%] aspect-square"
                pinned={true}
              />

              <BlogpostCard
                title="Designing Blogpost-style Personal Wesbite"
                description="An Attempt to Learn Next JS"
                coverImagePath="/blog-img/PJ02/PJ02-logo.png"
                blogPath="/blog/personal-site"
                // pinnedImagePath="/blog-img/PJ01/PJ01-screenshot.png"
                // imageContainerClassName="w-[50%] aspect-square"
                pinned={false}
              />

              <BlogpostCard
                title="Crafting Isometric Cutscenes for a Story-Based Casual Game"
                description="a Professional Endeavour for Piper's Pet Cafe"
                coverImagePath="/blog-img/PJ03/PJ03-logo.png"
                pinnedImagePath="/blog-img/PJ03/PJ03-screenshot.png"
                type="Game Dev."
                typeColor="amber"
                blogPath="/blog/pipers-pet-cafe"
                // pinnedImagePath="/blog-img/PJ01/PJ01-screenshot.png"
                // imageContainerClassName="w-[50%] aspect-square"
                pinned={true}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
