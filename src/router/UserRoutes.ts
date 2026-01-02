import express from 'express';
import UserController from '../controller/UserControler.ts';

const userRoputer = express.Router();

userRoputer.post('/', UserController.register); 
userRoputer.get(`/:id`, UserController.getUserById); 

export default userRoputer;
export const userbasePath = '/user';