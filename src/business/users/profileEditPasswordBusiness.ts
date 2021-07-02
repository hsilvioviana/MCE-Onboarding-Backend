import { editUserPassword } from "../../data/users/editUserPassword"
import { getUserById } from "../../data/users/getUserById"
import { passwordEdit, usersInputEditPasswordDTO, USER_ROLES } from "../../model/users"
import { getTokenData } from "../../services/authenticator"
import { compare, hash } from "../../services/hashManager"


export const profileEditPasswordBusiness = async (input: usersInputEditPasswordDTO) : Promise<void> => {

   try {

        if (!input.password || !input.newPassword) {
        
            throw new Error('Preencha os campos "password" e "newPassword"')
        }

        const user = await getUserById(input.id)
        if(!user) { throw new Error('Usuário não encontrado') }

        const tokenData = getTokenData(input.token)

        if (tokenData.id !== input.id && tokenData.role !== USER_ROLES.ADMIN) {

            throw new Error('Você não pode editar a senha de outra pessoa')
        }

        if (!await compare(input.password, user.password))
        { throw new Error('Senha incorreta')}

        const passwordEdit: passwordEdit = { id: input.id, newPassword: await hash(input.newPassword) }

        await editUserPassword(passwordEdit)
    }
    catch(error) {

        throw new Error(error.message)
    }
}