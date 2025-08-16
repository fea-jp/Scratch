import webshare from "./webshare.js";
webshare();
const proxyList=[];

function getRandomProxy(){
    return `https://${proxyList[Math.floor(Math.random()*proxyList.length)]}`;
}

export {getRandomProxy,getIPAddres}