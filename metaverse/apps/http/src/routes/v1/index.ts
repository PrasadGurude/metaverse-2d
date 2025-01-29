import { Router } from "express";
import { userRouter } from "./user";
import { spaceRouter } from "./space";
import { adminRouter } from "./admin";

export const router = Router();
router.use("/user",userRouter)
router.use("/space",spaceRouter)
router.use("/admin",adminRouter)

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

