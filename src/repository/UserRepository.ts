import { getDb } from "../config/databse.ts";
import Log from "../util/log.ts";
import type { UserDomain } from "../types/User.ts";

const COLLECTION_NAME = 'user';
const CLASS = 'UserRepository';

class UserRepository {
    async create(req: UserDomain): Promise<UserDomain> {
        const MOTHOD = 'create';
        try {
            Log.startInfo(CLASS, MOTHOD, req);
            const db = await getDb();
            const usersCollection = db.collection<UserDomain>(COLLECTION_NAME);
            const userInserted = await usersCollection.insertOne(req);
            req._id = userInserted.insertedId;
            Log.endInfo(CLASS, MOTHOD, req);
            return req;
        } catch (error) {
            throw new Error('Erro interno ao persistir o usuário.');
            // todo: criar erro personalizado de repositório
        }
    }
}

export default new UserRepository();
