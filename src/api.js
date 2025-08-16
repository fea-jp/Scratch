import {Router} from "express";
import {User} from "./utils/scratch/classes.js"

const router=Router();

router.get("/ping",(req,res)=>{
    res.send("pong!")
});

router.get("/users/:username/projects",async (req,res)=>{
    const {username}=req.params;
    const user=new User(username);
    res.send(await user.getProjects(req.query.limit));
});

export default router;