import {Router} from "express";
import {imageUploadController} from "./image.controller";
import {imageUploader} from "../../utils/controllers/multer.controller";


const basePath = '/apis/image'

const router = Router()

router.route('/')
    .post(imageUploader, imageUploadController)

export const imageRoute = {basePath, router}