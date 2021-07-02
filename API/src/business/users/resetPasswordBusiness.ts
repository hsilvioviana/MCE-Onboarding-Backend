import { createResetCode } from "../../data/users/createResetCode"
import { getUserByEmail } from "../../data/users/getUserByEmail"
import { hash } from "../../services/hashManager"
import { resetCode } from "../../services/resetPasswordManager"
import { transporter } from "../../services/transporter"


export const resetPasswordBusiness = async (email: string) : Promise<void>  => {

    try {

        const user = await getUserByEmail(email)

        if (!user) { throw new Error("Usuário não encontrado") }
        
        const code = resetCode()

        transporter.sendMail({
            
            from: "<svtestcode@email.com>",
            to: email,
            subject: "Código de Recuperação de Senha",
            text: `Código: ${code}`
        })

        await createResetCode(email, await hash(code))
    }
    catch (error) {

        throw new Error(error.message)
    }
}