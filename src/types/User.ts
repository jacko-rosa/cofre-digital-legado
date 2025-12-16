import { ObjectId } from 'mongodb';

export type UserDto = {
    _id?: ObjectId;
    email: string;
    name: string;
    cpf: string;
};

export type UserRequest ={
    email: string;
    password: string;
    name: string;
    cpf: string;
};

export type UserDomain = {
    _id?: ObjectId;
    email: string;
    name: string;
    cpf: string;
    dateCreate: Date;
    dateUpdate: Date;
    active: boolean;
};