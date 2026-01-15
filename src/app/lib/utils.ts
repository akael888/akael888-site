import { remark } from "remark";
import remarkHtml from "remark-html";

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
