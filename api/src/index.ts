import express, { Express } from "express";
import cors from "cors";
import { config } from "./config";
import db from "./db/mongodb";
import dotenv from "dotenv";
import router from "./routes/index";

dotenv.config();

const app:Express = express();
const PORT = config.server_port;
db;

app.use(cors({
    origin:"*"
}))
app.use(express.json());
app.use(express.urlencoded());

app.use("/api", router);

app.listen(PORT, () => {
    console.log("Server is running at port " + PORT)   
})