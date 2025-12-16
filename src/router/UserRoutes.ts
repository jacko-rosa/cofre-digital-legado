import express from 'express';
import UserController from '../controller/UserControler.ts';

const userRoputer = express.Router();

userRoputer.post('/', UserController.register); 

export default userRoputer;
export const userbasePath = '/user';