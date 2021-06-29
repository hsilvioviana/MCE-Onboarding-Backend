import { compare } from "bcryptjs"
import { getUserByEmail } from "../../data/users/getUserByEmail"
import { usersInputLoginDTO } from "../../model/users"
import { generateToken } from "../../services/authenticator"


export const loginBusiness = async (input: usersInputLoginDTO) : Promise<string> => {

    try {

        if (!input.email || !input.password) {
      
            throw new Error('Preencha os campos "email" e "password"')
        }

        const user = await getUserByEmail(input.email)

        if (!user) {

            throw new Error('Usuário não encontrado!')
        }

        if (!await compare(input.password, user.password)) {

            throw new Error('Senha inválida!')
        }

        const token = generateToken({ id: user.id, role: user.role })

        return token
    }
    catch(error) {

        throw new Error(error.message)
    }
}