import { connection } from "../connection"


export const deleteUser = async (id: string) : Promise<void> => {
    
    await connection.raw(`DELETE FROM MCE_Users WHERE id = "${id}"`)
}