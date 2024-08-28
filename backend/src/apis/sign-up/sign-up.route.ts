import {Router} from "express";
import {signupProfileController} from "./sign-up.controller";


const basePath = '/apis/sign-up'

const router = Router()

router.route('/').post(signupProfileController)



export const signUpRoute = { basePath, router }