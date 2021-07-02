export enum USER_ROLES {

   NORMAL = 'NORMAL',
   ADMIN = 'ADMIN'
}

export type authenticationData = {

   id: string,
   role: USER_ROLES
}

export type usersInputSignupDTO = {

   name: string,
   nickname: string,
   email: string,
   password: string,
   cpf: string
}

export type userCreator = {

   id: string
   name: string,
   nickname: string,
   email: string,
   password: string,
   cpf: string
}

export type user = {

   id: string,
   name: string,
   nickname: string,
   email: string,
   cpf: string,
   password: string,
   role: USER_ROLES
}

export type usersInputLoginDTO = {

   email: string,
   password: string
}

export type userProfile = {

   id: string,
   name: string,
   nickname: string,
   email: string,
   cpf: string
}

export type usersInputEditInfoDTO = {

   token: string,
   id: string,
   name: string,
   nickname: string,
   email: string,
   cpf: string
}

export type usersInputEditPasswordDTO = {

   token: string,
   id: string,
   password: string,
   newPassword: string
}

export type passwordEdit = {

   id: string,
   newPassword: string
}

export type usersInputDeleteDTO = {
   
   id: string,
   token: string
}

export type usersInputChangePasswordWithCodeDTO = {
   
   email: string,
   code: string,
   newPassword: string
}