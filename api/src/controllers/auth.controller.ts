import { NextFunction, Request, Response } from "express";
import CryptoJS from "crypto-js"; 
import { User } from "../models/User";
import { config } from "../config";
import { generateJWT } from "../helpers/jwt";


export default {
    async createUser(
        req: Request,
        res: Response,
        next: NextFunction
    ){
        try {
            const { name, email, password } = req.body;

            let findUser = await User.findOne({ email });

            if(findUser) return res.status(400).json({
                ok:false,
                message:"User already exists."
            });

            const newUser = new User({
                name,
                email,
                password:CryptoJS.AES.encrypt(password, config.cryptojs.secret)
            });

            const savedUser = await newUser.save();
            res.status(201).json({
                ok:true,
                userId:savedUser._id,
                name:savedUser.name
            });
        } catch (err) {
            next(err);
        }
    },
    async login(
        req: Request,
        res: Response,
        next: NextFunction
    ){
        try {
            const { email, password } = req.body;
            
            let foundUser = await User.findOne({ email });

            if(!foundUser) return res.status(400).json({
                ok:false,
                message:"User not found."
            });

            let passwordDecrypted = CryptoJS.AES.decrypt(foundUser.password, config.cryptojs.secret!);
            const userPassword = passwordDecrypted.toString(CryptoJS.enc.Utf8);

            if(userPassword !== password) return res.status(400).json({
                ok:false,
                message:"Email or password are not valid."
            });

            const token = generateJWT( foundUser._id, foundUser.name );


            res.status(200).json({
                ok:true,
                userId:foundUser._id,
                name:foundUser.name,
                token
            })

        } catch (err) {
            next(err)
        }
    }
}