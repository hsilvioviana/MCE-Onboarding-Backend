import { Request, Response } from "express"
import { signupBusiness } from "../../business/users/signupBusiness"
import { usersInputSignupDTO } from "../../model/users"


export const signup = async (req: Request, res: Response) : Promise<void> => {

   try {
      
      const { name, nickname, email, password, cpf } = req.body

      const input: usersInputSignupDTO = { name, nickname, email, password, cpf }

      const token: string = await signupBusiness(input)

      res.status(201).send({ message: 'Usuário criado com sucesso!', token })
   } 
   catch (error) {

      res.status(400).send({ error: error.message })
   }
}