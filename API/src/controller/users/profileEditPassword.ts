import { Request, Response } from "express"
import { profileEditPasswordBusiness } from "../../business/users/profileEditPasswordBusiness"
import { usersInputEditPasswordDTO } from "../../model/users"


export const profileEditPassword = async (req: Request, res: Response) : Promise<void> => {

    try {

        const { password, newPassword } = req.body

        const token = req.headers.authorization as string

        const id = req.params.id

        const input: usersInputEditPasswordDTO = { token, id, password, newPassword, }

        await profileEditPasswordBusiness(input)

        res.status(200).send({ message: "Senha editada com sucesso!"})
    }
    catch(error) {

        res.status(400).send({ error: error.message })
    }
}