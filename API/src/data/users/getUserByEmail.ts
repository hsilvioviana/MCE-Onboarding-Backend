import { user } from "../../model/users";
import { connection } from "../connection";


export const getUserByEmail = async (email: string) : Promise<user> => {

    const result = await connection.raw(`SELECT * FROM MCE_Users WHERE email = "${email}"`)

    return result[0][0]
}