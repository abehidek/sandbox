export default async function fetchMarkdown(slug) {
  const mdPromise = await fetch(`${process.env.cdnRaw}/${slug}/main.md`);
  return await mdPromise.text();
}
