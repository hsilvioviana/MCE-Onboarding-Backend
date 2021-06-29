import { user, userProfile } from "../../model/users"
import { connection } from "../connection"


export const getUsers = async () : Promise<userProfile[]> => {

    const result = await connection.raw(`SELECT * FROM MCE_Users`)

    const users: userProfile[] = []

    for (let user of result[0]) {

        users.push({
            
            id: user.id,
            name: user.name,
            nickname: user.nickame,
            email: user.email,
            cpf: user.cpf
        })
    }

    return users
}