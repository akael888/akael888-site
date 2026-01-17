import {
  fetchPostBasedOnId,
  getAllImageCollectionByBlog,
} from "@/app/lib/data";
import {
  convertDateISOMetrictoDateName,
  convertMarkdownToHTML,
} from "@/app/lib/utils";
import BlogPostTypeChip from "@/app/ui/blogpost/blogpost-type-chip";
import ImageCarousel from "@/app/ui/blogpost/image-carousel";
import { notFound } from "next/navigation";

interface BlogPostProps {
  params: Promise<{ blogID: string }>;
}

export default async function Page({ params }: BlogPostProps) {
  const { blogID } = await params;

  const data = await fetchPostBasedOnId(blogID);
  const post = data;

  if (!post) {
    notFound();
  }

  const parsedContent = await convertMarkdownToHTML(post.content);
  const convertedDate = await convertDateISOMetrictoDateName(post.date);

  const imageCollectionPaths = post.imgColPath
    ? await getAllImageCollectionByBlog(post.imgColPath)
    : null;
    
  return (
    <div className="min-h-screen h-fit border-1 border-border border-t-0 p-2 bg-bg text-text">
      <article className="h-full p-1 border-1 border-border">
        <div className="p-2 flex flex-row gap-2 border-b-1 border-border">
          <div className="w-[70%]">
            <h1 className="text-2xl font-bold">{post.title}</h1>
            <p>{post.description}</p>
          </div>
          <div className="w-[30%] flex flex-col justify-end items-end">
            <p>{convertedDate}</p>
            <BlogPostTypeChip blogType={post.type} />
          </div>
        </div>

        <div className="w-full p-2">
          <div className="w-full max-h-[10%] flex flex-row gap-2 overflow-y-auto">
            {imageCollectionPaths ? (
              <ImageCarousel imageCollectionPaths={imageCollectionPaths} />
            ) : null}

            {/* <img src="/ppc-logo.png" alt="" className="w-full" />
            <img src="/ppc-logo.png" alt="" className="w-full" />
            <img src="/ppc-logo.png" alt="" className="w-full" /> */}
          </div>
          <div
            className="no-tailwind"
            dangerouslySetInnerHTML={{ __html: parsedContent }}
          ></div>
        </div>
      </article>
    </div>
  );
}
