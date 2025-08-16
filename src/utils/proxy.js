//使ってないやつ
const proxyList=["23.95.150.145", "198.23.239.134", "45.38.107.97", "207.244.217.165", "107.172.163.27", "104.222.161.211", "64.137.96.74", "216.10.27.159", "136.0.207.84", "136.0.207.84"];
function getRandomProxy(){
    return `https://${proxyList[Math.floor(Math.random()*proxyList.length)]}`;
}
export default getRandomProxy