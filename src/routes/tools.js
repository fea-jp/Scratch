import path from "path";
import { __dirname } from "../utils/path.js";
import express from "express";
const router=express.Router();

router.get("/uahikaku",(req,res)=>{
    res.sendFile(path.join(__dirname,"../views/uahikaku.html"));
});

export default router;