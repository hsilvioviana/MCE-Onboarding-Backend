import { getProfile } from "../../data/users/getProfile"
import { getUserById } from "../../data/users/getUserById"
import { userProfile } from "../../model/users"
import { getTokenData } from "../../services/authenticator"



export const profileBusiness = async (token: string, userId: string) : Promise<userProfile> => {

    try {

        const tokenData = getTokenData(token)

        const checkToken = await getUserById(tokenData.id)
        if (!checkToken) { throw new Error("Token Inválido") }

        if (tokenData.id !== userId &&tokenData.role !== "ADMIN") {

            { throw new Error("Você não pode acessar o perfil de outra pessoa") }
        }

        const user = await getProfile(userId)

        return user
    }
    catch(error) {

        throw new Error(error.message)
    }
}