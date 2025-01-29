import { Router } from "express";

export const router = Router();

router.get("/", (req, res) => {
    res.json({ message: "Welcome to API v1" });
});


router.post("/signup", (req, res) => {
    res.json({ message: "User signed up" });
});

router.post("/signin", (req, res) => {
    res.json({ message: "User signed in" });
});

router.get('/elements',(req ,res )=>{

})

router.get('/avatars',(req,res)=>{
    
})

