import { remark } from "remark";
import remarkHtml from "remark-html";
import { fetchAllPosts } from "./data";
import { revalidatePath } from "next/cache";

export async function convertMarkdownToHTML(content: string) {
  const convertedContent = await remark().use(remarkHtml).process(content);

  const finalContent = convertedContent.toString();
  console.log(finalContent);
  return finalContent;
}

export async function convertDateISOMetrictoDateName(dateISOString: string) {
  const dateObject = new Date(dateISOString);
  const convertedDate = dateObject.toLocaleDateString(undefined, {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return convertedDate;
}

export async function sortBlogpost(ascending: boolean = true) {
  const post = await fetchAllPosts();
  if (!post) {
    return [];
  }

  return post.sort((a, b) => {
    const dateA = new Date(a.data.date).getTime();
    const dateB = new Date(b.data.date).getTime();
    if (ascending) {
      // Ascending Order (1-10)
      return dateA - dateB;
    }
    // Descending Order (10-1)
    else return dateB - dateA;
  });
}
