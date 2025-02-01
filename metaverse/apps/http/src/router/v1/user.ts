import { Router } from 'express'
import { UpdateMetadataSchema } from '../../types'
import { userMiddleware } from '../../middleware/user'
import client from "@repo/db/client"

export const userRouter = Router()

userRouter.post("/metadata", userMiddleware, async (req, res) => {
    const parsedData = UpdateMetadataSchema.safeParse(req.body)
    if (!parsedData.success) {
        res.status(400).json({ message: " Validation failed" })
        return
    }

    await client.user.update({
        where:{
            id:req.userId
        },
        data:{
            avatarId:parsedData.data.avatarId
        }
    })

    res.json({message:"Metadata Updated"})

})

userRouter.get("/metadata/bulk",async (req, res) => {
    const userIdString = (req.query.ids ?? "[]") as string;
    const userIds = (userIdString).slice(1, userIdString?.length - 1).split(",");
    console.log(userIds)
    const metadata = await client.user.findMany({
        where: {
            id: {
                in: userIds
            }
        }, select: {
            avatar: true,
            id: true
        }
    })

    res.json({
        avatars: metadata.map(m => ({
            userId: m.id,
            avatarId: m.avatar?.imageUrl
        }))
    })
})

