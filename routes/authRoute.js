import express from "express";
import { signup,login } from "../controllers/authController.js";
const authRoute =   express.Router()

// signup api
authRoute.post('/signup', signup)

// login api
authRoute.post('/login', login)



export default authRoute