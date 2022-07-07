export interface Post {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    excerpt: string;
    cover_image?: string;
  };
  content: string;
}

export interface FetchError {
  error: string;
  status: number;
}

export const isFetchError = (res: any): res is FetchError => {
  return "error" in res;
};

export interface GitTreeResponse {
  tree: [
    {
      path: string;
      mode: string;
      type: string;
      sha: string;
      url: string;
    }
  ];
}

export type PostsSlugs = string[];
