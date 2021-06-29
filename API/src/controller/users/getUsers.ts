import { Request, Response } from "express"
import { getUsersBusiness } from "../../business/users/getUsersBusiness"


export const getUsers = async (req: Request, res: Response) : Promise<void> => {

    try {

        const token = req.headers.authorization as string

        const users = await getUsersBusiness(token)

        res.status(200).send({ users })
    }
    catch(error) {

        res.status(400).send({ error: error.message })
    }
}