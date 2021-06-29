import { getProfile } from "../../data/users/getProfile"
import { userProfile } from "../../model/users"
import { getTokenData } from "../../services/authenticator"



export const profileBusiness = async (token: string) : Promise<userProfile> => {

    try {

        const id = getTokenData(token).id

        const user = await getProfile(id)

        return user
    }
    catch(error) {

        throw new Error(error.message)
    }
}