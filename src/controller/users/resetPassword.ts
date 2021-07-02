import { Request, Response } from "express"
import { resetPasswordBusiness } from "../../business/users/resetPasswordBusiness"


export const resetPassword = async (req: Request, res: Response) : Promise<void> => {

    try {

        const email = req.body.email

        await resetPasswordBusiness(email)

        res.status(200).send({ message: "O código foi enviado para o seu email"})
    }
    catch (error) {

        res.status(400).send({ error: error.message })
    }
}