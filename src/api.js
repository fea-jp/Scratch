import {Router} from "express";
import {User,Project} from "./utils/scratch/classes.js"

const router=Router();

router.get("/ping",(req,res)=>{
    res.send("pong!")
});

router.get("/users/:username",async(req,res)=>{
    const {username}=req.params;
    const user=new User(username);
    try{
        res.send(await user.init());
    }catch(e){
        console.error(e.message);
        res.status(404).send(e);
    }
});

router.get("/users/:username/ua",async(req,res)=>{
    try{
        const {username}=req.params;
        const user=new User(username);
        await user.init();
        const projects=await user.getProjects(1);
        const project=new Project(projects[0].id);
        await project.init();
        const json=await project.getJSON();
        res.send(json.meta);
    }catch(e){
        res.status(404).send(e);
    }
});

router.get("/users/:username/projects",async (req,res)=>{
    const {username}=req.params;
    const user=new User(username);
    res.send(await user.getProjects(req.query.limit));
});

router.get("/projects/:projectid",async(req,res)=>{
    const {projectid}=req.params;
    const project=new Project(projectid);
    res.send(await project.init());
});

router.get("/projects/:projectid/json",async(req,res)=>{
    const {projectid}=req.params;
    const project=new Project(projectid);
    await project.init();
    res.send(await project.getJSON());
});

export default router;