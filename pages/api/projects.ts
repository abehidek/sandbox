// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getAllProjects, createProject, addProjectOwner, deleteProject, removeProjectOwner } from '../../prisma/project';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET': {
      const allProjects = await getAllProjects();
      return res.status(200).json(allProjects);
    }
    case 'POST': {
      const { name, userId } = req.body
      const project = await createProject(name, userId);
      return res.status(200).json(project);
    }
    case 'PATCH': {
      const { operation, projectId, userId } = req.body;
      switch (operation) {
        case 'add': {
          const project = await addProjectOwner(projectId, userId);
          return res.status(200).json(project);
        }
        case 'remove': {
          const response = await removeProjectOwner(projectId, userId);
          return res.status(200).json(response);
        }
        default: return res.status(400).json({ error: "operation notfound" })
      }

    }
    case 'DELETE': {
      const { projectId } = req.body;
      const project = await deleteProject(projectId);
      return res.status(200).json(project);
    }
    default: break;
  }
}
