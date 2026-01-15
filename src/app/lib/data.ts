import path from "path";
import fs from "fs";
import matter from "gray-matter";

export async function fetchPostBasedOnId(id: string) {
  console.log(`Fetching ${id} Details`);
  try {
    const filePath = path.join(process.cwd(), "src", "app", "data", `${id}.md`);
    const readFile = fs.readFileSync(filePath, "utf8");
    const parsedFile = matter(readFile);

    // console.log(parsedFile);

    const { data, content } = parsedFile;
    // const { title, description, date, author, type } = data;

     return {
      title: data.title ?? "Untitled",
      description: data.description ?? "",
      date: data.date ?? new Date().toISOString(),
      type: data.type ?? "General",
      content: content,
    };
  } catch (error) {
    console.log(error);
    return null
  }
}

export async function fetchAllPosts() {
  console.log("Fetching All Post");
  try {
    const filePath = path.join(process.cwd(), "src", "app", "data");
    const fileNames = fs.readdirSync(filePath, "utf8");
    const promises = fileNames.map((fileName) => {
      return matter(fs.readFileSync(path.join(filePath, fileName), "utf8"));
    });

    console.log(fileNames);

    const fileContents = await Promise.all(promises);

    console.log("Successfully Fetch All Posts");
    console.log(fileContents);

    return fileContents;
  } catch (error) {
    console.log(error);
    return null;
  }
}
