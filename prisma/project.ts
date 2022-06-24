import { userInfo } from 'os';
import prisma from './index';

export const getAllProjects = async () => {
    const projects = prisma.project.findMany();
    return projects
};

export const createProject = async (name:string, userId:string) => {
    const project = await prisma.project.create({
        data: {
            name: name,
            userIDs: { set: [userId] }
        }
    });

    const user = await prisma.user.update({
        where: { userId },
        data: { projectIDs: { push: project.projectId } }
    });

    return [project, user];
};

export const addProjectOwner = async (projectId:string, userId: string) => {
    const project = await prisma.project.update({
        where: { projectId },
        data: {
            userIDs: { push: userId }
        }
    });

    const user = await prisma.user.update({
        where: { userId },
        data: { projectIDs: { push: projectId } }
    });

    return [project, user];
};