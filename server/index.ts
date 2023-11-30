import express, { Express } from 'express';
import { reititin as menuReitit } from './reitit/menu';

const PORT = 3001;

const app: Express = express();

app.use(express.json());

app.use("/menu", menuReitit);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
  