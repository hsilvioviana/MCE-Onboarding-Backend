import { deleteCode } from "../../data/users/deleteCode"
import { editUserInfo } from "../../data/users/editUserInfo"
import { getUserByCpf } from "../../data/users/getUserByCpf"
import { getUserByEmail } from "../../data/users/getUserByEmail"
import { getUserById } from "../../data/users/getUserById"
import { getUserByNickname } from "../../data/users/getUserByNickname"
import { usersInputEditInfoDTO, USER_ROLES } from "../../model/users"
import { getTokenData } from "../../services/authenticator"


export const profileEditInfoBusiness = async (input: usersInputEditInfoDTO):Promise<void> => {

   try {

      if (!input.name || !input.nickname || !input.email || !input.cpf) {
      
         throw new Error('Preencha os campos "name", "nickname", "email", "password" e "cpf"')
      }

      const tokenData = getTokenData(input.token)

      const checkToken = await getUserById(tokenData.id)
      if (!checkToken) { throw new Error("Token Inválido") }

      const user = await getUserById(input.id)
      if(!user) { throw new Error('Usuário não encontrado') }

      if (tokenData.id !== input.id && tokenData.role !== USER_ROLES.ADMIN) {

         throw new Error('Você não pode editar o perfil de outra pessoa')
      }

      const nicknameExists = await getUserByNickname(input.nickname)
      if(nicknameExists && nicknameExists.id !== input.id) 
      { throw new Error('Esse nickname já está sendo utilizado') }

      const emailExists = await getUserByEmail(input.email)
      if(emailExists && emailExists.id !== input.id) 
      { throw new Error('Esse email já está sendo utilizado') }

      const cpfExists = await getUserByCpf(input.cpf)
      if(cpfExists && cpfExists.id !== input.id) 
      { throw new Error('Esse cpf já está sendo utilizado') }

      await deleteCode(user.email)

      await editUserInfo(input)
   }
   catch(error) {

      throw new Error(error.message)
   }
}