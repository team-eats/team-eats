import {Router} from "express";
import {signInController} from "./sign-in.controller";

const basePath = '/apis/sign-in'

const router = Router()

router.route('/').post(signInController)

export const signInRoute = {basePath, router}