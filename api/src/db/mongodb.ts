import mongoose from "mongoose";
import { config } from "../config/index"

const db = mongoose.connect(`mongodb+srv://daniel:${config.mongoDB.password}@cluster0.kppjbhd.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => console.log("Successfull database connection"))
    .catch(err => console.log(err));

export default db;