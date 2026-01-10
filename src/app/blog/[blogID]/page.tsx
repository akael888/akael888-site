interface BlogPostProps {
  params: Promise<{ blogID: string }>;
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { blogID } = await params;

  const post = await getBlogPost(blogID);

  if (!post) {
    return <div className="border-1">Post not found</div>;
  }

  return (
    <div className="h-screen border-1 border-black border-t-0">
      <article className="h-full text-black p-1">
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </article>
    </div>
  );
}

async function getBlogPost(blogID: string) {
  return { title: `Post: ${blogID}`, content: "In Progress.." };
}
