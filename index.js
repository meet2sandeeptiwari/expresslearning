import express from "express";
const app = express();

// function agecheck(req, resp, next){
//     if(!req.query.age || req.query.age<18){
//         resp.send("alert! you can not access this page");
//     }else{
//         next();
//     }
// }
// app.use(agecheck);


function ipcheck(req, resp, next){
    const ip=req.socket.remoteAddress
    console.log(ip);
    if(!ip.includes('192.168.1.6')){
        resp.send("alert! you can not access this page")
    }else{
        next();
    }
}
app.use(ipcheck);

app.get("/", (req, resp) => {
  resp.send("this is home page");
});

app.get("/login", (req, resp) => {
  resp.send("this is login page");
});

app.get("/admin", (req, resp) => {
  resp.send("this is admin page");
});

app.listen(3200);