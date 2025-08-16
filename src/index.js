import { config } from "dotenv";
config();
import express from "express";
import api from "./api.js"

const app=express();

app.use("/api",api);

const PORT=process.env.PORT||8080;
const listener=app.listen(PORT,PORT=>{console.log(`Server is running on PORT ${PORT}`)});