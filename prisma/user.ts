import prisma from './index'

export const getAllUsers = async () => {
    const users = await prisma.user.findMany()
    return users
}

export const getUser = async (userId:string) => {
    const user = await prisma.user.findUnique({
        where: { userId:userId }
    })
    return user
}

export const createUser = async (email:string, name:string) => {
    const user = await prisma.user.create({
        data: { email: email, name: name, }
    })
    return user;
}

export const updateUser = async (userId:string, updateData:any) => {
    const user = await prisma.user.update({
        where: {userId},
        data: { ...updateData }
    })
    return user
}

export const deleteUser = async (userId:string) => {
    const user = await prisma.user.delete({
        where: {userId}
    })
    return user
}