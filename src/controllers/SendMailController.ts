import {Request, Response} from "express"
import { getCustomRepository } from "typeorm";

import { SurveysRepository } from "../repositories/SurveysRepository";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";
import { UsersRepository } from "../repositories/UsersRepository";



class SendMailController {
    async execute(request: Request, response: Response) {
        const { email, survey_id } = request.body;

        const usersRepository = getCustomRepository(UsersRepository);
        const surveysRepository = getCustomRepository(SurveysRepository);
        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository)

        const userAlreadyExists = await usersRepository.findOne({email})

        if (!userAlreadyExists) {
            return response.status(400).json({
                error: "User does not exist",
            })
        }
        const surveyAlreadyExist = await surveysRepository.findOne({id: survey_id})
        if (!surveyAlreadyExist) {
            return response.status(400).json({
                error: "Survey does not exist"
            })
        }
        // SALVAR INFO NA TABELA
        const surveyUser = surveysUsersRepository.create({
            user_id: userAlreadyExists.id,
            survey_id
        })
        await surveysUsersRepository.save(surveyUser)

        return response.json(surveyUser)
    }

}

export { SendMailController };
