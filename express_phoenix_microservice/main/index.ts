import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import axios from 'axios';
import { Socket } from 'phoenix-channels'
import { ServerResponse } from 'http';

dotenv.config();

const app: Express = express();

app.use(express.json())

const port = process.env.PORT;
let socket = new Socket("ws://localhost:4000/socket")
socket.connect()

let channel = socket.channel("todo:lobby")
channel.join().receive("ok", res => { console.table(res) })

channel.on("new_todo", res => { console.table(res) })

app.get('/', (req: Request, res: Response) => { res.send('teste Express + TypeScript Server'); });

// HTTP Rest Microservice connection
app.get('/users', async (req: Request, res: Response) => {
    const user = await axios.get('http://localhost:4000/api/users')
    res.send(user.data);
});

app.get('/ping', async (req: Request, res: Response) => {
    channel.push("ping", { clientId: process.pid }).receive("ok", (msg) => res.send(`your pid: ${JSON.stringify(msg)}`))
});

app.post('/todo', (req: Request, res: Response) => {
    channel.push("new_todo", req.body).receive("ok", (msg) => res.send(msg))
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});