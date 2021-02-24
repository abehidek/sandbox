import { Request, Response } from 'express';
class UserController {
    async create(request: Request, response: Response) {
        const body = request.body;
        console.log(body);
        return response.send();
    }
}

export { UserController };