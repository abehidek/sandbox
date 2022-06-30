// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Post = {
  name: string
}

const githubToken = process.env.SERVER_SIDE_VALUE || ""

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<Post>>
) {
  res.status(200).json([
    { name: 'John Doe' },
    { name: "something idk" },
  ])
}
