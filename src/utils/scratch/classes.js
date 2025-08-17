class User{
    constructor(username){
        this.username=username;
    }

    async init(){
        try{
            const res=await fetch(`https://api.scratch.mit.edu/users/${this.username}`);
            const data=await res.json();
            const {id,username,scratchteam,history,profile}=data;
            this.id=id;
            this.username=username;
            this.scratchteam=scratchteam;
            this.history=history;
            this.country=profile.country;
        }catch(e){
            throw new Error(e);
        }
    }
    
    async getProjects(limit=3){
        try{
            const res=await fetch(`https://api.scratch.mit.edu/users/${this.username}/projects?limit=${limit}`);
            const data=await res.json();
            return data;
        }catch(e){
            throw new Error(e);
        }
    }
}

class Project{
    constructor(id){
        this.id=id;
    }
    async init(){
        try{
            const res=await fetch(`https://api.scratch.mit.edu/projects/${this.id}`);
            const data=await res.json();
            this.project_token=data.project_token;
            return data;
        }catch(e){
            throw new Error(e);
        }
    }
    async getJSON(){
        try{
            const res=await fetch(`https://projects.scratch.mit.edu/${this.id}?token=${this.project_token}`);
            const data=await res.json();
            return data;
        }catch(e){
            throw new Error(e);
        }
    }
}

export {User,Project}