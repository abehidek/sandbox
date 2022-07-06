import type { NextApiRequest, NextApiResponse } from "next";
import type { ParsedUrlQuery } from "querystring";
import fetchRepositoryPost, {
  Post,
  FetchError,
  isFetchError,
} from "../../../lib/fetchRepositoryPost";

interface UrlQuery extends ParsedUrlQuery {
  slug?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post | FetchError>
) {
  const urlQuery: UrlQuery = req.query;
  if (urlQuery.slug === undefined) {
    res.status(400).json({
      error: "Could not parse the url query string because is empty",
      status: 400,
    });
  } else {
    const response: Post | FetchError = await fetchRepositoryPost(
      urlQuery.slug
    );
    if (isFetchError(response)) res.status(response.status).json(response);
    else res.status(200).json(response);
  }
}
