import { sortBlogpost } from "@/app/lib/utils";
import BlogpostCard from "./blogpost-card";

export default async function BlogpostGenerate() {
  const blogPostArray = await sortBlogpost(false);
  return (
    <>
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
    </>
  );
}
