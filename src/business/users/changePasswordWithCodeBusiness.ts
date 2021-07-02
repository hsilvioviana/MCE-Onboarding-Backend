import { deleteCode } from "../../data/users/deleteCode"
import { editUserPassword } from "../../data/users/editUserPassword"
import { getCodeByEmail } from "../../data/users/getCodeByEmail"
import { getUserByEmail } from "../../data/users/getUserByEmail"
import { usersInputChangePasswordWithCodeDTO, USER_ROLES } from "../../model/users"
import { generateToken } from "../../services/authenticator"
import { compare, hash } from "../../services/hashManager"


export const changePasswordWithCodeBusiness = async (input: usersInputChangePasswordWithCodeDTO) : Promise<string> => {

    try {

        if (!input.code || !input.newPassword) {

            throw new Error("Você deve fornecer: 'code' e 'newPassword'")
        }

        const user = await getUserByEmail(input.email)

        if (!user) { throw new Error("Usuário não encontrado") }

        const checkCode = await getCodeByEmail(input.email)

        if (!checkCode || !await compare(input.code, checkCode.code)) {

            throw new Error("Código Inválido")
        }

        await editUserPassword({ id: user.id, newPassword: await hash(input.newPassword) })

        const token = generateToken({ id: user.id, role: user.role })

        await deleteCode(input.email)

        return token
    }
    catch (error) {

        throw new Error(error.message)
    }
}