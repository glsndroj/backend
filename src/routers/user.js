import { Router } from "express";
import { createUser, DeleteUserById, getUser, getUsersById, UpdateUserById } from "../controllers/user.js";

export const UserRouter = Router();

UserRouter
.post('/', createUser)
.get('/', getUser)
.get('/:id', getUsersById)
.patch('/:id', UpdateUserById)
.delete('/:id', DeleteUserById)