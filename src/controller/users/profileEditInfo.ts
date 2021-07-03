import { Request, Response } from "express"
import { profileEditInfoBusiness } from "../../business/users/profileEditInfoBusiness"
import { deleteCode } from "../../data/users/deleteCode"
import { usersInputEditInfoDTO } from "../../model/users"


export const profileEditInfo = async (req: Request, res: Response) : Promise<void> => {

    try {

        const token = req.headers.authorization as string

        const { name, nickname, email, cpf } = req.body

        const id = req.params.id

        const input: usersInputEditInfoDTO = { token, id, name, nickname, email, cpf }

        await profileEditInfoBusiness(input)

        res.status(200).send({ message: "Usuário editado com sucesso!" })
    }
    catch(error) {

        res.status(400).send({ error: error.message })
    }
}