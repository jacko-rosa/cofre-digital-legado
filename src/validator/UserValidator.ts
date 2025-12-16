import type { UserRequest } from "../types/User.ts";

export class UserValidator {
    static validateRequest({ email, password, name, cpf }: UserRequest): void {
        if (!email || !password || !name || !cpf) {
            throw new Error('Todos os campos (email, senha, nome, cpf) são obrigatórios.');
            // todo: criar exceção personalizada
        }
    }
}