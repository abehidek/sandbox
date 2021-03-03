import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UsersRepository';
import * as yup from 'yup'
import { AppError } from '../../errors/AppError';
// SHIFT ALT O organiza os imports
// CONTROLA AS POSSÍVEIS ROTAS DE CONEXÃO ENTRE O FRONT E BANCO DE DADOS

class UserController {
    async create(request: Request, response: Response) 
    {
        const { name, email } = request.body;

        const schema = yup.object().shape({
            name: yup.string().required("Nome é obrigatório"),
            email: yup.string().email().required("Email incorreto")
        })

        // if (!(await schema.isValid(request.body))) {
        //     return response.status(400).json({error: "validation failed"})
        // }
        
        try {await schema.validate(request.body, {abortEarly: false})}
        catch (err) {throw new AppError(err)}

        const usersRepository = getCustomRepository(UsersRepository);

        const userAlreadyExist = await usersRepository.findOne({
            email
        })
        
        if (userAlreadyExist) {
            throw new AppError("User already exist!")
        }
        
        const user = usersRepository.create({
            name, email
        })

        await usersRepository.save(user);

        return response.status(201).json(user);
    }
}

export { UserController };