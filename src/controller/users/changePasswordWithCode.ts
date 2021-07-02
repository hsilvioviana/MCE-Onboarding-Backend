import { Request, Response } from "express"
import { changePasswordWithCodeBusiness } from "../../business/users/changePasswordWithCodeBusiness"
import { usersInputChangePasswordWithCodeDTO } from "../../model/users"


export const changePasswordWithCode = async (req: Request, res: Response) : Promise<void> => {

    try {

        const email = req.params.email

        const { code, newPassword } = req.body

        const input: usersInputChangePasswordWithCodeDTO = { email, code, newPassword }

        const token = await changePasswordWithCodeBusiness(input)

        res.status(200).send({ token })
    }
    catch (error) {

        res.status(400).send({ error: error.message })
    }
}