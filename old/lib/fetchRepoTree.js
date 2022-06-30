export default async function fetchRepoTree() {
  const contents = await fetch(`${process.env.cdnRefs}`);
  const response = await contents.json();
  const folders = [];
  response.map((content) => {
    if (content.type == 'tree') {
      folders.push(content.file_name);
    }
  });
  return folders;
}
