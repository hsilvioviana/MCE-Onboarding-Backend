import { Router } from "express"
import { signup } from "../controller/users/signup"
import { login } from "../controller/users/login"
import { profile } from "../controller/users/profile"
import { profileEditInfo } from "../controller/users/profileEditInfo"
import { profileEditPassword } from "../controller/users/profileEditPassword"
import { profileDelete } from "../controller/users/profileDelete"
import { getUsers } from "../controller/users/getUsers"


export const usersRouter = Router()

usersRouter.get("/profile", profile)
usersRouter.get("/all", getUsers)
usersRouter.post("/signup", signup)
usersRouter.post("/login", login)
usersRouter.put("/edit/info/:id", profileEditInfo)
usersRouter.put("/edit/password/:id", profileEditPassword)
usersRouter.delete("/delete/:id", profileDelete)