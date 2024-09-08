import {Router} from "express";
import {isLoggedInController} from "../../utils/controllers/isLoggedIn.controller";
import {
    deleteSectionBySectionIdController,
    getSectionBySectionIdController,
    postSectionController,
    putSectionController
} from "./section.controller";


const basePath = '/apis/section'

const router = Router ()

router.route('/')
    .post(isLoggedInController, postSectionController)

router.route('/:sectionId')
    .put(isLoggedInController, putSectionController)
    .delete(isLoggedInController, deleteSectionBySectionIdController)
    .get(getSectionBySectionIdController)


export const sectionRoute = { basePath, router }