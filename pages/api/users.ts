// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { error } from 'console';
import type { NextApiRequest, NextApiResponse } from 'next'
import { stringify } from 'querystring';
import { getAllUsers, getUser, createUser, updateUser, deleteUser } from '../../prisma/user';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET': {
      if (req.query.userId) {
        const user = await getUser(req.query.userId as string)
        return res.status(200).json(user)
      } else {
        const allUsers = await getAllUsers();
        return res.status(200).json(allUsers);
      }
    }
    case 'POST': {
      const { email, name } = req.body
      const user = await createUser(email, name);
      return res.status(200).json(user);
    }
    case 'PUT': {
      const { userId, ...updateData } = req.body;
      const user = await updateUser(userId, updateData);
      return res.status(200).json(user);
    }
    case 'DELETE': {
      const { userId } = req.body;
      const user = await deleteUser(userId);
      return res.status(200).json(user)
    }
    default: break;
  }
}
