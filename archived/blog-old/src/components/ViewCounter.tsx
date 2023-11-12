import { trpc } from "../utils/trpc";

const ViewCounterComponent = ({
  route,
  slug,
}: {
  route: "article.getViews" | "snippet.getViews";
  slug: string | string[] | undefined;
}) => {
  const views = trpc.useQuery([route, { slug: slug?.toString() }], {
    refetchOnWindowFocus: false,
  });
  return <p>{views.data ? views.data.views : "---"} views</p>;
};

export default ViewCounterComponent;
