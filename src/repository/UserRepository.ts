import { getDb } from "../config/databse.ts";
import Log from "../util/log.ts";
import type { UserDomain } from "../types/User.ts";
import { ObjectId } from "mongodb";

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
        }
    }

    async findById(id: string): Promise<UserDomain> {
        const MOTHOD = 'findById';
        try {
            Log.startInfo(CLASS, MOTHOD, id);
            const db = await getDb();
            const usersCollection = db.collection<UserDomain>(COLLECTION_NAME);
            const user = await usersCollection.findOne({ _id: new ObjectId(id) });
            if (!user) {
                throw new Error('Usuário não encontrado.');
            }
            Log.endInfo(CLASS, MOTHOD, user);
            return user;
        } catch (error) {
            throw new Error('Erro interno ao buscar o usuário.');
        }
    }
}

export default new UserRepository();
