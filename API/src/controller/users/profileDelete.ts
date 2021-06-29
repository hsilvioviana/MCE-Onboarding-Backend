import { Request, Response } from "express"
import { profileDeleteBusiness } from "../../business/users/profileDeleteBusiness"
import { usersInputDeleteDTO } from "../../model/users"


export const profileDelete = async (req: Request, res: Response) : Promise<void> => {

    try {

        const id = req.params.id

        const token = req.headers.authorization as string

        const input: usersInputDeleteDTO = { id, token }

        await profileDeleteBusiness(input)

        res.status(200).send({ message: "Usuário apagado com sucesso!" })
    }
    catch(error) {

        res.status(400).send({ error: error.message })
    }
}