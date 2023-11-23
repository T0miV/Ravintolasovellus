import express, { Express } from 'express';

const PORT = 3001;

const app: Express = express();

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
  