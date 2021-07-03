import { deleteCode } from "../../data/users/deleteCode"
import { deleteUser } from "../../data/users/deleteUser"
import { getUserById } from "../../data/users/getUserById"
import { usersInputDeleteDTO, USER_ROLES } from "../../model/users"
import { getTokenData } from "../../services/authenticator"


export const profileDeleteBusiness = async (input: usersInputDeleteDTO) : Promise<void> => {

    try {

        const tokenData = getTokenData(input.token)

        const checkToken = await getUserById(tokenData.id)
        if (!checkToken) { throw new Error("Token Inválido") }

        const user = await getUserById(input.id)
        if(!user) { throw new Error('Usuário não encontrado') }

        if (tokenData.id !== input.id && tokenData.role !== USER_ROLES.ADMIN) {

            throw new Error('Você não pode deletar o perfil de outra pessoa')
        }

        await deleteCode(user.email)

        await deleteUser(input.id)
    }
    catch(error) {

        throw new Error(error.message)
    }
}