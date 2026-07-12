import express from 'express';
const app=express();

app.get("/", (req,resp)=>{
    resp.send("this is home page");
});

app.get("/users", (req,resp)=>{
    resp.send("this is users page");
});

app.get("/error", (req,resp,next)=>{
    const error=new Error("error coming");
    error.status=404;
    next(error);
});


function errorHandleingError(error, req,resp,next){
    resp.status(error.status || 500).send("try after some times");
}
app.use(errorHandleingError);

app.listen(3202);