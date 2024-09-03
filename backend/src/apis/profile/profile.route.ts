import {getPublicProfileByProfileIdController, putProfileController} from "./profile.controller";
import {Router} from "express";
import {isLoggedInController} from "../../utils/controllers/isLoggedIn.controller";


const basePath = '/apis/profile'

const router: Router = Router()

router.route('/:profileId')
    .get(getPublicProfileByProfileIdController)
    .put(isLoggedInController, putProfileController)



export const profileRoute = {basePath, router}