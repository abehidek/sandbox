// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { error } from 'console';
import type { NextApiRequest, NextApiResponse } from 'next'
import { stringify } from 'querystring';
import { getAllUsers, getUser, createUser, updateUser, deleteUser } from '../../prisma/user';

export default async function handler( req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET': {
      if (req.query.id) {
        const user = await getUser(req.query.id as string)
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
      const { id, ...updateData } = req.body;
      const user = await updateUser(id, updateData);
      return res.status(200).json(user);
    }
    case 'DELETE': {
      const { id } = req.body;
      const user = await deleteUser(id);
      return res.status(200).json(user)
    }
    default: break;
  }
}
