import { getUsers } from "../../data/users/getUsers"
import { userProfile } from "../../model/users"
import { getTokenData } from "../../services/authenticator"


export const getUsersBusiness = async (token: string) : Promise<userProfile[]> => {
    
    try {

        const tokenData = getTokenData(token)

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