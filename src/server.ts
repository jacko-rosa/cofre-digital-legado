import express from 'express';
import dotenv from 'dotenv';
import rootRouter from './router/index.ts';

const app = express();

dotenv.config();

app.use(express.json());

app.use('/', rootRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
