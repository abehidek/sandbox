import { Post2 } from "../pages";

export const sortByDate = (a: Post2, b: Post2) => {
  if (b.frontmatter != undefined && a.frontmatter != undefined) {
    const dateB = new Date(b.frontmatter.date).getTime();
    const dateA = new Date(a.frontmatter.date).getTime();
    return dateB - dateA;
  }

  return 200;
};
