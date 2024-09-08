import { Express } from 'express'
import { Readable } from 'stream'
import { v2 as cloudinaryUtils, UploadStream, UploadApiOptions } from 'cloudinary'

export const uploadToCloudinary = async (file: Express.Multer.File) => {
    cloudinaryUtils.config({
        api_key: process.env.CLOUDINARY_KEY,
        api_secret: process.env.CLOUDINARY_SECRET,
        cloud_name: process.env.CLOUD_NAME
    })

    return await new Promise((resolve, reject): void => {
        const cloudinaryUploadStream: UploadStream = cloudinaryUtils.uploader.upload_stream(
            (error: Error, cloudinaryResult: UploadApiOptions | undefined) => {
                if (cloudinaryResult !== undefined) {
                    resolve(cloudinaryResult.secure_url)
                } else {
                    reject(error)
                }
            })

        const readable: Readable = new Readable()
        readable._read = () => {}
        readable.push(file.buffer)
        readable.push(null)
        readable.pipe(cloudinaryUploadStream)
    })
}