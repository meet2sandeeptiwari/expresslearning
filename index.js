import express from "express";
import path from "path";
const app = express();


app.use(express.urlencoded({extended:false}));

app.use(express.static("public"));

const absolutepat=path.resolve("view");

app.get("/", (req, resp) => {
  resp.sendFile(absolutepat+"/home.html");
});


app.get("/login", (req, resp) => {
  resp.sendFile(absolutepat+"/login.html");
});


app.post("/submit", (req, resp) => {
    console.log("users login details ", req.body);
  resp.sendFile(absolutepat+"/submit.html");
});

app.get("/users", (req, resp) => {
  resp.sendFile(absolutepat+"/users.html");
});

app.listen(3200);
