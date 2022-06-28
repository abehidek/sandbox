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

export const deleteProject = async (projectId: string) => {
    const project = await prisma.project.delete({
        where: { projectId },
    });

    const users = await prisma.user.findMany({})
    users.forEach(async user => {
        const project_user = await prisma.user.findFirst({
            where: { userId: user.userId }
        })
        const updated_user = await prisma.user.update({
            where: { userId: user.userId },
            data: {
                projectIDs: { set: project_user?.projectIDs.filter((id) => id !== projectId), }
            }
        })
    })

    return [project, users];
}