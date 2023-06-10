/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { UserDTO } from './dto/user.dto';
import { IUser } from './interfaces/user.interface';
import { Model } from 'mongoose';
export declare class UserService {
    private readonly model;
    constructor(model: Model<IUser>);
    findByUsername(username: string): Promise<IUser>;
    checkPassword(password: string, passwordDB: string): Promise<boolean>;
    hashPassword(password: string): Promise<string>;
    create(userDto: UserDTO): Promise<IUser>;
    findAll(): Promise<IUser[]>;
    findOne(id: string): Promise<IUser>;
    update(id: string, updateUserDto: UserDTO): Promise<IUser>;
    remove(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, IUser> & Omit<IUser & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, import("mongoose").Document<unknown, {}, IUser> & Omit<IUser & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, {}, IUser, "findOneAndDelete">;
}
