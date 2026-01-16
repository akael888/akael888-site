import path from "path";
import { readFile, readdir } from "fs/promises";
import matter from "gray-matter";

export async function fetchPostBasedOnId(id: string) {
  console.log(`Fetching ${id} Details`);
  try {
    const filePath = path.join(process.cwd(), "src", "app", "data", `${id}.md`);
    const fileData = await readFile(filePath, "utf8");
    const parsedFile = matter(fileData);

    // console.log(parsedFile);

    const { data, content } = parsedFile;
    // const { title, description, date, author, type } = data;

    return {
      title: data.title ?? "Untitled",
      description: data.description ?? "",
      date: data.date ?? new Date().toISOString(),
      type: data.type ?? "General",
      content: content,
      imgColPath: data.imgColPath ?? "",
    };
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function fetchAllPosts() {
  console.log("Fetching All Post");
  try {
    const filePath = path.join(process.cwd(), "src", "app", "data");
    const fileNames = await readdir(filePath, "utf8");
    const promises = fileNames.map(async (fileName) => {
      const fileContent = await readFile(path.join(filePath, fileName), "utf8");
      return matter(fileContent);
    });

    console.log(fileNames);

    const fileContents = await Promise.all(promises);

    console.log(fileContents);
    console.log("Successfully Fetch All Posts");

    return fileContents;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getAllImageCollectionByBlog(imgColPath: string) {
  console.log(`Get All Image Collections by this path: ${imgColPath}`);
  try {
    const filePath = path.join(process.cwd(), "public", imgColPath);
    const fileNames = await readdir(filePath, "utf8");

    console.log("Filenames:");
    console.log(fileNames);

    return fileNames.map((fileName) => `${imgColPath}/${fileName}`);
  } catch (error) {
    console.log(error);
  }
}
