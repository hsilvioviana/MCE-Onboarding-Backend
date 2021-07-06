# Documentação da API

## Funcionalidades
- Cadastro
- Login
- Ver Perfil
- Ver lista de perfis
- Recuperar senha
- Mudar senha com código de recuperação
- Editar informações do perfil
- Editar senha do perfil
- Deletar perfil

---

## - Cadastro
### POST "/users/signup"

* Body

        name = VARCHAR(64)
        nickname = VARCHAR(64)
        email = VARCHAR(64)
        password = VARCHAR(64)
        cpf = VARCHAR(64)

        {
            "name": "Silvio Viana",
            "nickname": "hsilvioviana",
            "email": "silvio@email.com",
            "password": "123456",
            "cpf": "777.777.777-77"
        }

* Resposta

        {
            "message": "Usuário criado com sucesso!",
            "token": "eyJhb..."
        }

        OU

        { 
            "error": Mensagem de Erro
        }

---

## - Login
### POST "/users/login"

* Body

        email = VARCHAR(64)
        password = VARCHAR(64)

        {
            "email": "silvio@email.com",
            "password": "123456"
        }

* Resposta

        {
            "message": "Login realizado com sucesso!",
            "token": "eyJhb..."
        }

        OU

        { 
            "error": Mensagem de Erro
        }

---

## - Ver Perfil
### GET "/users/profile/:id"

* Headers

        Authorization: token

* Resposta

        {
            "user": {
                "id": "597f515e...",
                "name": "Silvio Viana",
                "nickname": "hsilvioviana",
                "email": "silvio@email.com",
                "cpf": "777.777.777-77"
            }
        }

        OU

        { 
            "error": Mensagem de Erro
        }

---

## - Ver lista de perfis
### GET "/users/all"

* Atenção

        Apenas Administradores podem ver a lista de usuários

* Headers

        Authorization: token

* Resposta

        {
            "users": [
                {
                    "id": "74820ab8...",
                    "name": "Administrador",
                    "nickname": "admin_pedro",
                    "email": "admin@base.com",
                    "cpf": "000.000.000-00"
                },
                {
                    "id": "d57e4720...",
                    "name": "Silvio Viana",
                    "nickname": "hsilvioviana",
                    "email": "silvio@email.com",
                    "cpf": "777.777.777-77"
                }
            ]
        }

        OU

        { 
            "error": Mensagem de Erro
        }

---

## - Recuperar senha
### POST "/users/reset/password"

* Body

        {
            "email": "silvio@email.com"
        }

* Resposta

        {
            "message": "O código foi enviado para o seu email"
        }

        OU

        { 
            "error": Mensagem de Erro
        }

---

## - Mudar senha com código de recuperação
### PUT "/users/reset/password/:email"

* Params

        email = email do usuário que esqueceu a senha

* Body

        {
            "code": "85d72cff",
            "newPassword": "abc123"
        }

* Resposta

        {
            "token": "eyJhb..."
        }

        OU

        { 
            "error": Mensagem de Erro
        }

---

## - Editar informações do perfil
### PUT "/users/edit/info/:id"

* Params

        id = id do usuário que vai ser editado

* Atenção

        Usuários Normais só podem editar seu próprio perfil
        Usuários Administradores podem editar o perfil de qualquer usuário

* Headers

        Authorization: token

* Body

        {
            "name": "Silvio Ximenes",
            "nickname": "hsilvioximenes",
            "email": "silviox@email.com",
            "cpf": "777.777.777-00"
        }

* Resposta

        {
            "message": "Usuário editado com sucesso!"
        }

        OU

        { 
            "error": Mensagem de Erro
        }

---

## - Editar senha do perfil
### PUT "/users/edit/password/:id"

* Params

        id = id do usuário que vai ser editado

* Atenção

        Usuários Normais só podem editar seu próprio perfil
        Usuários Administradores podem editar o perfil de qualquer usuário

* Headers

        Authorization: token

* Body

        {
            "password": "123456",
            "newPassword": "1234567"
        }

* Resposta

        {
            "message": "Senha editada com sucesso!"
        }

        OU

        { 
            "error": Mensagem de Erro
        }

---

## - Deletar perfil
### DELETE "/users/delete/:id"

* Params

        id = id do usuário que vai ser deletado

* Atenção

        Usuários Normais só podem deletar seu próprio perfil
        Usuários Administradores podem deletar o perfil de qualquer usuário

* Headers

        Authorization: token


* Resposta

        {
            "message": "Usuário apagado com sucesso!"
        }

        OU

        { 
            "error": Mensagem de Erro
        }
