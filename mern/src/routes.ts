import { Express, Request, Response } from "express";

export default function routes (app: Express) {
  app.get('/health', (req:Request, res:Response) => { res.sendStatus(200); })

  app.get('/', function (req, res) {
    res.json({ hello: 'World2' });
  });

  app.post('/', (req, res) => {
    const { name } = req.body;
    res.send({ nice: 'request '+name });
  });
}
