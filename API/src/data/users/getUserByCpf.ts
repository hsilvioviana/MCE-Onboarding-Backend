import { user } from "../../model/users"
import { connection } from "../connection"


export const getUserByCpf = async (cpf: string) : Promise<user> => {

    const result = await connection.raw(`SELECT * FROM MCE_Users WHERE cpf = "${cpf}"`)

    return result[0][0]
}

