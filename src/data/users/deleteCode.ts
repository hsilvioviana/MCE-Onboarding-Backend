import { connection } from "../connection"


export const deleteCode = async (email: string) : Promise<void> => {

    await connection.raw(`DELETE FROM MCE_ResetPassword WHERE email = "${email}"`)
}