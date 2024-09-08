import {Router} from "express";
import {isLoggedInController} from "../../utils/controllers/isLoggedIn.controller";
import {
    deleteItemByItemIdController,
    getItemByItemIdController,
    postItemController,
    putItemByItemIdController
} from "./item.controller";
import {putProfileController} from "../profile/profile.controller";


const basePath = '/apis/item'

const router = Router ()

router.route('/')
    .post(isLoggedInController, postItemController)

router.route('/:itemId')
    .put(isLoggedInController, putItemByItemIdController)
    .delete(isLoggedInController, deleteItemByItemIdController)
    .get(getItemByItemIdController)

export const itemRoute = {basePath, router}

