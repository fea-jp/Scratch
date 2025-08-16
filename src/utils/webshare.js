async function getIPAuthorization(){
    const res=await fetch("https://proxy.webshare.io/api/v2/proxy/ipauthorization/",{
        headers:{"Authorization":`Token ${process.env.PROXY_API_KEY}`}
    });
    const data=await res.json();
    console.log(data);
    const ret=[];
    data.results.forEach(v=>{
        ret.push(v.ip_address);
    });
    return ret;
}

async function getIPAddres(){
    const res=await fetch("https://proxy.webshare.io/api/v2/proxy/ipauthorization/whatsmyip/",{
        method:"GET",
        headers:{"Authorization":`Token ${process.env.PROXY_API_KEY}`}
    });
    const data=await res.json();
    console.log(data);
    return data.ip_address;
}

export default async function(){
    const ip=await getIPAddres();
    const ipList=await getIPAuthorization();
    if(ipList.includes(ip))return;
    console.log(ipList,ip)
}