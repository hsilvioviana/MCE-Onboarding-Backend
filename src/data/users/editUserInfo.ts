import { userProfile } from "../../model/users"
import { connection } from "../connection"


export const editUserInfo = async (user: userProfile) : Promise<void> => {

    await connection.raw(`UPDATE MCE_Users SET name = "${user.name}", nickname = "${user.nickname}", 
    email = "${user.email}", cpf = "${user.cpf}", updatedAt = CURDATE() WHERE id = "${user.id}"`)
}