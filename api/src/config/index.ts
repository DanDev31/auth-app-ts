import dotenv from "dotenv";
dotenv.config();


export const config = {
    server_port:process.env.PORT || 4000,

    mongoDB:{
        password:process.env.MONGO_PASSWORD
    },
    cryptojs:{
        secret:process.env.CRYPTOJS_SECRET_PHRASE || ""
    },
    jwt:{
        secret:process.env.JWT_SECRET || ""
    }
}