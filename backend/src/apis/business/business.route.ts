import {Router} from "express";
import {
    postBusinessController,
    deleteBusinessByBusinessIdController,
    getAllBusinesses,
    getBusinessByBusinessBio,
    getBusinessByBusinessIdController,
    getBusinessByBusinessNameController,
    getBusinessesByBusinessProfileIdController,
    getBusinessesByProfileNameController
} from "./business.controller";
import {isLoggedInController} from "../../utils/controllers/isLoggedIn.controller";


const basePath = '/apis/business'

const router = Router()

router.route('/')
    .post(isLoggedInController, postBusinessController)
    .get(getAllBusinesses)

router.route('/profileName/:profileName')
    .get(getBusinessesByProfileNameController)

router.route('/businessProfileId/:businessProfileId')
    .get(getBusinessesByBusinessProfileIdController)

router.route('/:businessName')
    .get(getBusinessByBusinessNameController)

router.route('/:businessBio')
    .get(getBusinessByBusinessBio)

router.route('/:businessId')
    .get(getBusinessByBusinessIdController)
    .delete(isLoggedInController, deleteBusinessByBusinessIdController)

export const businessRoute = { basePath, router }
