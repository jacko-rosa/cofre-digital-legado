import { UserValidator } from "../validator/UserValidator.ts";
import UserMapper from "../mapper/UserMapper.ts";
import UserRepository from "../repository/UserRepository.ts";
import Log from "../util/log.ts";
import type { UserDto, UserRequest } from "../types/User.ts";

const CLASS = 'UserService';

class UserService {
    
    async register(userReq: UserRequest): Promise<UserDto> {
        const METHOD = 'register';
        Log.startInfo(CLASS, METHOD, userReq);
        UserValidator.validateRequest(userReq);
        const userDomain = UserMapper.requestToDomain(userReq);
        const createdUser = await UserRepository.create(userDomain);
        const response = UserMapper.domainToDTO(createdUser);
        Log.endInfo(CLASS, METHOD, response);
        return response;
    }
}

export default new UserService();