import { Request, Response } from "express"

import { getCustomRepository } from "typeorm"
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository"


class AnswerController 
{
    /**
     * Route Params => Parametros da rota
     * Query Params => Busca, paginação, parametros não obrigatorios, sempre vem depois do ?
     * chave=valor
     */
    async execute(request: Request, response: Response) 
    {
        const { value } = request.params
        const { u } = request.query
        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository)
        const surveyUser = await surveysUsersRepository.findOne({
            id: String(u)
        })
        if (!surveyUser)
        {
            return response.status(400).json({
                error: "Survey User does not exist"
            })
        }
        surveyUser.value = Number(value)

        await surveysUsersRepository.save(surveyUser)
        
        return response.json(surveyUser)
    }
}

export {AnswerController}