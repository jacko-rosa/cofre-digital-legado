import UserService from '../service/UserService.ts';
import Log from '../util/log.ts';
import type { Request, Response } from 'express';
import type { UserDto, UserRequest } from '../types/User.ts';

const CLASS = 'UserController';

class UserController {

    async register(req: Request<UserRequest>, res: Response): Promise<UserDto | void> {
        const METHOD = 'register';
        try {
            Log.startInfo(CLASS, METHOD, req.body);
            const user: UserRequest = req.body;
            const createdUser = await UserService.register(user);
            Log.endInfo(CLASS, METHOD, createdUser);
            res.status(201).json(createdUser);
        } catch (error) {
            Log.error(CLASS, METHOD, 'Error registering user', error);
            res.status(500).json({ message: 'Erro interno' });
        }
    }

    async getUserById(req: Request<{ id: string }>, res: Response): Promise<UserDto | void> {
        const METHOD = 'getUserById';
        try {
            Log.startInfo(CLASS, METHOD, req.params);
            const user = await UserService.getUserById(req.params.id);
            Log.endInfo(CLASS, METHOD, user);
            res.status(200).json(user);
        } catch (error) {
            Log.error(CLASS, METHOD, 'Error getting user by id', error);
            res.status(500).json({ message: 'Erro interno' });
        }
    }
}

export default new UserController();