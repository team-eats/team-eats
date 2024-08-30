import {Router} from "express";
import {signOutController} from "./sign-out-controller";


const basePath = '/apis/sign-out'

const router = Router()

router.route('/').get(signOutController)

export const signOutRoute = { basePath, router }
