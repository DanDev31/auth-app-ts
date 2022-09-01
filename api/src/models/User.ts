import { Schema, model } from "mongoose";

export interface UserInterface {
    name:string;
    email:string;
    password:string;
};

const UserSchema = new Schema<UserInterface>({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    }
});

export const User = model<UserInterface>('User', UserSchema)