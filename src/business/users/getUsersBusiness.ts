import { getUserById } from "../../data/users/getUserById"
import { getUsers } from "../../data/users/getUsers"
import { userProfile } from "../../model/users"
import { getTokenData } from "../../services/authenticator"


export const getUsersBusiness = async (token: string) : Promise<userProfile[]> => {
    
    try {

        const tokenData = getTokenData(token)

        const checkToken = await getUserById(tokenData.id)
        if (!checkToken) { throw new Error("Token Inválido") }

        if (tokenData.role !== "ADMIN") {

            throw new Error("Apenas Administradores tem acesso a lista de usuários")
        }

        const users: userProfile[] = await getUsers()

        return users
    }
    catch(error) {

        throw new Error(error.message)
    }
}