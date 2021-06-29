import { Request, Response } from 'express'
import { loginBusiness } from '../../business/users/loginBusiness';
import { usersInputLoginDTO } from "../../model/users";


export const login = async (req: Request, res: Response): Promise<void> => {

    try {

        const { email, password } = req.body

        const input: usersInputLoginDTO = { email, password }

        const token = await loginBusiness(input)

        res.status(200).send({ message: 'Login realizado com sucesso!', token })
    }
    catch(error) {

        res.status(400).send({ error: error.message })
    }
}