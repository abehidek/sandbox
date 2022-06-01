import express from 'express';
import config from 'config';
import connect from './utils/connect';

const port = config.get<number>('port');
const app = express();

app.get("/", function (req, res) {
  res.json({ hello: "World" })
})

app.listen(port, () => { console.log("Listening on port", port) })
