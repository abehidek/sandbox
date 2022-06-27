import { userInfo } from 'os';
import prisma from './index';

export const getAllProjects = async () => {
    const projects = prisma.project.findMany();
    return projects
};

export const createProject = async (name: string, userId: string) => {
    const userAndProject = await prisma.user.update({
        where: { userId },
        data: {
            projects: { create: { name: name, } }
        }
    });

    return userAndProject;
};

export const addProjectOwner = async (projectId: string, userId: string) => {

    const projectAndUser = await prisma.project.update({
        where: { projectId },
        data: {
            users: {
                connect: { userId: userId }
            }
        }
    });

    return projectAndUser;
};