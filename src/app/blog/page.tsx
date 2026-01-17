import BlogpostGenerate from "../ui/blogpost/blogpost-generate";
import BlogSection from "../ui/blogpost/sections/blog-section";

export default function Page({}) {
  return (
    <div className="bg-white min-h-screen text-black flex flex-col min-h-screen border-l-1 border-r-1 border-black">
      <BlogSection>
        <BlogpostGenerate />
      </BlogSection>
    </div>
  );
}
