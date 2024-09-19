import {
    deleteProfileByProfileIdController,
    getPublicProfileByProfileIdController,
    putProfileController
} from "./profile.controller";
import {Router} from "express";
import {isLoggedInController} from "../../utils/controllers/isLoggedIn.controller";


const basePath = '/apis/profile'

const router: Router = Router()

//.get(getPublicProfileByProfileIdController)

router.route('/:profileId')
    .get(getPublicProfileByProfileIdController)
    .put(isLoggedInController, putProfileController)
    .delete(isLoggedInController, deleteProfileByProfileIdController)


export const profileRoute = { basePath, router }
