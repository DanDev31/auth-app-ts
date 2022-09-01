import jwt from "jsonwebtoken";
import { config } from "../config";



export const generateJWT = ( id:object, name:string ) => {

    const payload = { id, name }

    return jwt.sign(
        payload,
        config.jwt.secret,
        {
            expiresIn: "2h"
        }
    )
}