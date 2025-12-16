import { ConversionnException } from "../types/exception/ConversionException.ts";
import type { UserDto, UserRequest, UserDomain } from "../types/User.ts";

export default class UserMapper {
    static requestToDomain(req: UserRequest): UserDomain {
        try {
            return {
                email: req.email,
                name: req.name,
                cpf: req.cpf,
                dateCreate: new Date(),
                active: true
            } as UserDomain;
        } catch (error) {
            throw new ConversionnException('UserRequest', 'UserDomain');
        }
    }

    static domainToDTO(req: UserDomain): UserDto {
        try {
            return {
                _id: req._id,
                email: req.email,
                name: req.name,
                cpf: req.cpf,
            } as UserDto;
        } catch (error) {
            throw new ConversionnException('UserDomain', 'User');
        }
    }
}