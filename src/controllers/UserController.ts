import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../models/User';

class UserController {
    async create(request: Request, response: Response) {
        const { name, email } = request.body;
        const usersRepository = getRepository(User);

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

        return response.json(user);
    }
}

export { UserController };