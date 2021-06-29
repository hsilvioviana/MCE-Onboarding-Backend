import { deleteUser } from "../../data/users/deleteUser";
import { getUserById } from "../../data/users/getUserById";
import { usersInputDeleteDTO, USER_ROLES } from "../../model/users";
import { getTokenData } from "../../services/authenticator";


export const profileDeleteBusiness = async (input: usersInputDeleteDTO) : Promise<void> => {

    try {

        const user = await getUserById(input.id)
        if(!user) { throw new Error('Usuário não encontrado') }
  
        const tokenData = getTokenData(input.token)

        if (tokenData.id !== input.id && tokenData.role !== USER_ROLES.ADMIN) {

            throw new Error('Você não pode deletar o perfil de outra pessoa')
        }

        await deleteUser(input.id)
    }
    catch(error) {

        throw new Error(error.message)
    }
}