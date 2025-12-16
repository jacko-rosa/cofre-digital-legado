import { Db, MongoClient } from 'mongodb';
import { DataBaseConnectionException } from '../types/exception/DataBaseConnectionException.ts';
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URI: string = mountMongoUri();
const DATA_BASE: string = 'cofre-digital';

let clientInstance: MongoClient | null = null;

export async function getDb(): Promise<Db> {
    try {
        return (await getClientInstance()).db(DATA_BASE);
    } catch {
        throw new DataBaseConnectionException();
    }
}

function mountMongoUri(): string {
    var uri = process.env.MONGO_CONNECTION!;
    uri = uri.replace("USER", process.env.MONGO_USER!);
    uri = uri.replace("PASSWORD", process.env.MONGO_PASSWORD!);
    uri = uri.replace("CLUSTER", process.env.MONGO_CLUSTER!);
    uri = uri.replace("CLUSTER_ID", process.env.MONGO_CLUSTER_ID!);
    return uri;
}

async function getClientInstance(): Promise<MongoClient> {
    if (!clientInstance) {
        const client = new MongoClient(MONGO_URI);
        try {
            await client.connect();
            clientInstance = client;
        } catch (error) {
            throw new DataBaseConnectionException();
        }
    }
    return clientInstance;
}

