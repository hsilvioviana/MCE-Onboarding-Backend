import { connection } from "../connection"


export const createResetCode = async (email: string, code: string) : Promise<void> => {

    await connection.raw(`DELETE FROM MCE_ResetPassword WHERE email = "${email}"`)

    await connection.raw(`INSERT INTO MCE_ResetPassword VALUES ("${code}", "${email}")`)
}