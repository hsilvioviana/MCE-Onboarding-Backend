import { userProfile } from "../../model/users"
import { connection } from "../connection"


export const getProfile = async (id: string) : Promise<userProfile> => {

    const result = await connection.raw(`SELECT * FROM MCE_Users WHERE id = "${id}"`)

    const user = result[0][0]

    return {
        
        id,
        name: user.name,
        nickname: user.nickname,
        email: user.email,
        cpf: user.cpf
    }
}