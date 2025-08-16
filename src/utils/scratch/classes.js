class User{
    constructor(username){
        this.username=username;
    }

    async init(){
        const res=await fetch(`https://api.scratch.mit.edu/users/${this.username}`);
        const data=await res.json();
        const {id,username,scratchteam,history,profile}=data;
        this.id=id;
        this.username=username;
        this.scratchteam=scratchteam;
        this.history=history;
        this.country=profile.country;
    }
    
    async getProjects(limit=3){
        const res=await fetch(`https://api.scratch.mit.edu/users/${this.username}/projects?limit=${limit}`);
        const data=await res.json();
        return data;
    }
}

class Project{
    constructor(id){
        this.id=id;
    }
    async init(){
        const res=await fetch(`https://api.scratch.mit.edu/projects/${this.id}`);
        const data=await res.json();
        this.project_token=data.project_token;
        return data;
    }
    async getJSON(){
        const res=await fetch(`https://projects.scratch.mit.edu/${this.id}?token=${this.project_token}`);
        const data=await res.json();
        return data;
    }
}

export {User,Project}