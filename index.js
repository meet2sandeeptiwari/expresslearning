import express from 'express'
import { home} from "./page/home.js"
import { about } from './page/about.js';
import { contact } from './page/contact.js';

const app=express();

app.get("", (req,resp)=>{
    resp.send(home());
});
app.get("/about", (req,resp)=>{
    resp.send(about())
});

app.get("/contact", (req,resp)=>{
    resp.send(contact())
});


app.listen(3200);