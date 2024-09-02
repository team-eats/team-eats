import {Router} from "express";
import {
    createBusinessController,
    deleteBusinessByBusinessIdController,
    getAllBusinesses,
    getBusinessByBusinessBio,
    getBusinessByBusinessIdController,
    getBusinessByBusinessNameController,
    getBusinessByBusinessProfileIdController,
    getBusinessesByProfileNameController
} from "./business.controller";


const basePath = '/apis/business'

const router = Router()

router.route('/')
    .post(isLoggedInController, createBusinessController)
    .get(getAllBusinesses)

router.route('/profileName/:profileName').get(getBusinessesByProfileNameController)

router.route('/businessProfileId/:businessProfileId').get(getBusinessByBusinessProfileIdController)

router.route('/:businessName').get(getBusinessByBusinessNameController)

router.route('/:businessBio').get(getBusinessByBusinessBio)

router.route('/:businessId')
    .get(getBusinessByBusinessIdController)
    .delete(isLoggedInController, deleteBusinessByBusinessIdController)