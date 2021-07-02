import { hash } from "../../services/hashManager"
import { userCreator, usersInputSignupDTO, USER_ROLES } from "../../model/users"
import { generateToken } from "../../services/authenticator"
import { generateId } from "../../services/idGenerator"
import { createUser } from "../../data/users/createUser"
import { getUserByNickname } from "../../data/users/getUserByNickname"
import { getUserByEmail } from "../../data/users/getUserByEmail"
import { getUserByCpf } from "../../data/users/getUserByCpf"


export const signupBusiness = async (input: usersInputSignupDTO):Promise<string> => {

   try {

      if (!input.name || !input.nickname || !input.email || !input.password || !input.cpf) {
      
         throw new Error('Preencha os campos "name", "nickname", "email", "password" e "cpf"')
      }

      const nicknameExists = await getUserByNickname(input.nickname)
      if(nicknameExists) { throw new Error('Esse nickname já está sendo utilizado') }

      const emailExists = await getUserByEmail(input.email)
      if(emailExists) { throw new Error('Esse email já está sendo utilizado') }

      const cpfExists = await getUserByCpf(input.cpf)
      if(cpfExists) { throw new Error('Esse cpf já está sendo utilizado') }
   
      const cypherPassword = await hash(input.password)
   
      const newUser: userCreator = { ...input, password: cypherPassword, id: generateId() }
   
      await createUser(newUser)
   
      const token: string = generateToken({ id: newUser.id, role: USER_ROLES.NORMAL })
   
      return token
   }
   catch(error) {

      throw new Error(error.message)
   }
}
