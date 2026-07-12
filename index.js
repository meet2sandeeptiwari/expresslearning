import express from "express";
const app = express();
import path from "path";

import { absolutepath, publicpath } from "./page/abspath.js";


app.use(express.static(publicpath));
app.get("/", (req, resp) => {
  resp.sendFile(absolutepath+"/home.html");
});
app.get("/login", (req, resp) => {
  resp.sendFile(absolutepath+"/login.html");
});

app.post("/submit", (req, resp) => {
  resp.sendFile(absolutepath+"/submit.html");
});

app.use((req, resp) => {
  resp.sendFile(absolutepath+"/404.html");
});

app.listen(3200);
