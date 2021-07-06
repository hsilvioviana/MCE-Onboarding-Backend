import { getProfile } from "../../data/users/getProfile"
import { getUserById } from "../../data/users/getUserById"
import { userProfile } from "../../model/users"
import { getTokenData } from "../../services/authenticator"



export const profileBusiness = async (token: string, userId: string) : Promise<userProfile> => {

    try {

        getTokenData(token)

        const checkToken = await getUserById(userId)
        if (!checkToken) { throw new Error("Token Inválido") }

        const user = await getProfile(userId)

        return user
    }
    catch(error) {

        throw new Error(error.message)
    }
}