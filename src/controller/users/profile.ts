import { Request, Response } from "express"
import { profileBusiness } from "../../business/users/profileBusiness"
import { userProfile } from "../../model/users"


export const profile = async (req: Request, res: Response) : Promise<void> => {

    try {

        const token = req.headers.authorization as string

        const user: userProfile = await profileBusiness(token)

        res.status(200).send({ user })
    }
    catch (error) {

        res.status(400).send({ error: error.message })
    }
}