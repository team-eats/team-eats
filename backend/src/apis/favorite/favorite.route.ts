import {Router} from "express";
import {
    deleteFavoriteController,
    getFavoritesByFavoriteBusinessIdController, getFavoritesByFavoriteProfileIdController,
    postFavoriteController,
    toggleFavoriteController
} from "./favorite.controller";
import {isLoggedInController} from "../../utils/controllers/isLoggedIn.controller";

const basePath = '/apis/favorite'

const router = Router()

router.route('/')
    .post(isLoggedInController, postFavoriteController)

router.route('/toggle')
    .post(isLoggedInController, toggleFavoriteController)

router.route('/favoriteBusinessId/:favoriteBusinessId')
    .get(getFavoritesByFavoriteBusinessIdController)
    .delete(isLoggedInController, deleteFavoriteController)

router.route('/profileId/:profileId')
    .get(getFavoritesByFavoriteProfileIdController)

export const favoriteRoute = { basePath, router }