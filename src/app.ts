import express from 'express';
import config from 'config';
import connect from './utils/connect';
import routes from './routes';

const port = config.get<number>('port');
const app = express();

app.use(express.json());

app.listen(port, () => {
  console.log('Listening on port', port);

  routes(app);
});
