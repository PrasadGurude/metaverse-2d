import express from "express";
import { router } from "./router/v1";

const app = express();

app.use("/api/v1",router)
app.get('/',(req,res)=>{
    res.send("hello world")
})

app.listen(process.env.PORT || 3000,()=>{
    console.log("server is up an drunning")
})