import fetch from "node-fetch";
import { HttpsProxyAgent } from "https-proxy-agent";
import {getRandomProxy} from "./proxy.js";

export default async function(url,options){
    const client=new HttpsProxyAgent(getRandomProxy());
    return await fetch(url,{agent:client,...options});
}