import express from "express";
import auth from "../middlewares/auth.js";


import { login, signup } from "../controllers/auth.js";
import { getAllUsers, updateProfile } from '../controllers/users.js'

const router = express.Router();

//if req is a post req
router.post('/signup', signup)
router.post('/login', login)

router.get('/getAllUsers' , getAllUsers)
router.patch('/update/:id', auth, updateProfile)

export default router