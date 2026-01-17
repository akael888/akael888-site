import BlogpostGenerate from "../ui/blogpost/blogpost-generate";
import BlogSection from "../ui/blogpost/sections/blog-section";

export default function Page({}) {
  return (
    <div className="bg-bg min-h-screen text-text flex flex-col min-h-screen border-l-1 border-r-1 border-border">
      <BlogSection>
        <BlogpostGenerate />
      </BlogSection>
    </div>
  );
}
