import {Router} from "express";
import {isLoggedInController} from "../../utils/controllers/isLoggedIn.controller";
import {
    deleteLocationByLocationIdController,
    getLocationByLocationBusinessIdController,
    postLocationController,
    putLocationController
} from "./location.controller";

const basePath = '/apis/location'

const router = Router()

router.route('/')
.post(isLoggedInController, postLocationController)

router.route('/locationBusinessId/:locationBusinessId')
.get(getLocationByLocationBusinessIdController)

router.route('/:locationId')
.put(putLocationController)
.delete(isLoggedInController, deleteLocationByLocationIdController)

export const locationRoute = { basePath, router }