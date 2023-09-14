import express from "express";
import { signup , login , forget } from "../controllers/authController.js";
const authRoute =   express.Router()

// signup api
//localhost:8800/api/signup
authRoute.post('/signup', signup)

// login api
//localhost:8800/api/login
authRoute.post('/login', login)

// Forget api
// localhost:8800/api/forget/6502e7ec668ce982f7a727e1
authRoute.put('/forget/:id', forget)



export default authRoute