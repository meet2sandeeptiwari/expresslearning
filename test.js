import express from "express";
const app = express();

//middelware example1
// function agecheck(req, resp, next){
//     if(!req.query.age || req.query.age<18){
//         resp.send("alert! you can not access this page");
//     }else{
//         next();
//     }
// }
// app.use(agecheck);

//middelware example2
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


import express from "express";
// const app = express();

// function checkAgeRouteMiddleware(req, resp, next) {
//   console.log(req.query.age);
//   if (!req.query.age || req.query.age < 18) {
//     resp.send("alert! you can not access this page");
//   } else {
//     next();
//   }
// }

// function checkUrlRouteMiddleware(req, resp, next) {
//   console.log(req.url);
//   next();
// }

// app.get("/", (req, resp) => {
//   resp.send("Home page");
// });

// app.get("/login", checkUrlRouteMiddleware, (req, resp) => {
//   resp.send("login page");
// });

// app.get("/user", checkAgeRouteMiddleware, (req, resp) => {
//   resp.send("user page");
// });

// app.get("/products", checkAgeRouteMiddleware, (req, resp) => {
//   resp.send("products page");
// });

// app.listen(3200);
