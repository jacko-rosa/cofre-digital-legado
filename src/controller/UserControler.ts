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
            // todo: HandleError(error, res);
        }
    }
}

export default new UserController();