import { passwordEdit} from "../../model/users"
import { connection } from "../connection"


export const editUserPassword = async (input: passwordEdit) : Promise<void> => {

    await connection.raw(`UPDATE MCE_Users SET password = "${input.newPassword}",
    updatedAt = CURDATE() WHERE id = "${input.id}"`)
}