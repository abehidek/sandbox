import path from "path";
import fs from 'fs';
import matter from "gray-matter";

const USES_PATH = path.join(process.cwd(), "content/uses");

export const getAllUsesSlugs = (): string[] => {
  const usesPathFiles = fs.readdirSync(USES_PATH);
  const usesPaths = usesPathFiles
    .filter(fileName => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map(fileName => fileName.replace(/\.md$/, ''));
  
  return usesPaths.map((usePath) => {
    const parts = usePath.split("/");
    const fileName = parts[parts.length - 1] ?? "";
    const [slug, _ext] = fileName.split(".");
    return slug ?? "";
  })
}

export type UseMeta = {
  slug: string;
  title: string;
  description: string;
}

export type Use = {
  meta: UseMeta;
  content: string;
}

export const getOneUse = async (slug: string): Promise<Use> => {
  const isMDX = fs.existsSync(path.join(USES_PATH, `${slug}.mdx`))
  const usePath = isMDX ? path.join(USES_PATH, `${slug}.mdx`) : path.join(USES_PATH, `${slug}.md`);
  const useSource = fs.readFileSync(usePath)
  const { content, data } = matter(useSource);
  return {
    content,
    meta: {
      slug,
      title: data.title ?? slug,
      description: data.description ?? "",
    }
  }
}

export const getAllUses = async (): Promise<Use[]> => {
  const allUsesSlugs = getAllUsesSlugs();
  const allUses = await Promise.all(allUsesSlugs.map(async useSlug => await getOneUse(useSlug)))

  return allUses;
}
