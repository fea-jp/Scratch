import { config } from "dotenv";
config();

import express from "express";
import api from "./api.js"
import tools from "./routes/tools.js"

const app=express();

app.use("/",tools)
app.use("/api",api);

const PORT=process.env.PORT||8080;
app.listen(PORT,()=>{console.log(`Server is running on PORT ${PORT}`)});