import express from "express";
import { router } from "./router/v1";
import client from "@repo/db/client"
// const client = require("@repo/db/client");

const app = express();

app.use(express.json())
app.use("/api/v1", router)
 
app.get('/', (req, res) => {
    res.send("hello world")
})

app.listen(process.env.PORT || 3000, () => {
    console.log("server is up an running")
})