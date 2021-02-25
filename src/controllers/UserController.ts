import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UsersRepository';
// SHIFT ALT O organiza os imports
// CONTROLA AS POSSÍVEIS ROTAS DE CONEXÃO ENTRE O FRONT E BANCO DE DADOS

class UserController {
    async create(request: Request, response: Response) {
        const { name, email } = request.body;
        const usersRepository = getCustomRepository(UsersRepository);

        const userAlreadyExist = await usersRepository.findOne({
            email
        })
        
        if (userAlreadyExist) {
            return response.status(400).json({
                error: "User already exist!",
            })
        }
        
        const user = usersRepository.create({
            name, email
        })

        await usersRepository.save(user);

        return response.status(201).json(user);
    }
}

export { UserController };
