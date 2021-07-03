import { getProfile } from "../../data/users/getProfile"
import { getUserById } from "../../data/users/getUserById"
import { userProfile } from "../../model/users"
import { getTokenData } from "../../services/authenticator"



export const profileBusiness = async (token: string) : Promise<userProfile> => {

    try {

        const id = getTokenData(token).id

        const checkToken = await getUserById(id)
        if (!checkToken) { throw new Error("Token Inválido") }

        const user = await getProfile(id)

        return user
    }
    catch(error) {

        throw new Error(error.message)
    }
}