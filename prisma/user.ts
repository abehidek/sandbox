import prisma from './index'

export const getAllUsers = async () => {
    const users = await prisma.user.findMany()
    return users
}

export const getUser = async (id:string) => {
    const user = await prisma.user.findUnique({
        where: { id:id }
    })
    return user
}

export const createUser = async (email:string, name:string) => {
    const user = await prisma.user.create({
        data: { email: email, name: name, }
    })
    return user;
}

export const updateUser = async (id:string, updateData:any) => {
    const user = await prisma.user.update({
        where: {id},
        data: { ...updateData }
    })
    return user
}

export const deleteUser = async (id:string) => {
    const user = await prisma.user.delete({
        where: {id}
    })
    return user
}