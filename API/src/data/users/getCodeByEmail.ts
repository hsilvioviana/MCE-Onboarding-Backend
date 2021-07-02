import { connection } from "../connection"


export const getCodeByEmail = async (email: string) : Promise<any> => {

    const result = await connection.raw(`SELECT * FROM MCE_ResetPassword WHERE email = "${email}"`)

    return result[0][0]
}