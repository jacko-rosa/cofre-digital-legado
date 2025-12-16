import express from 'express';
import userRoputer, { userbasePath } from './UserRoutes.ts';

const rootRouter = express.Router();

rootRouter.use(userbasePath, userRoputer); 

export default rootRouter;