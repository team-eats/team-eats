import {z} from 'zod'
import {PrivateProfileSchema} from "../profile/profile.model";

export const SignUpProfileSchema = PrivateProfileSchema
.omit({ profileId: true, profileHash: true, profileIsOwner: true, profileActivationToken: true, profileDatetime: true
})
.extend({
    profilePasswordConfirm: z.string({required_error: "Profile password confirmation is required", invalid_type_error: "Profile password confirmation must be a string"})
        .min(8, { message: 'please provide a valid password (min 8 characters)'})
        .max(32, {message: 'please provide a valid password (max 32 characters)'}),
    profilePassword: z.string({required_error: "Profile password is required", invalid_type_error: "Profile password must be a string"})
        .min(8, { message: 'please provide a valid password (min 8 characters)' })
        .max(32, { message: 'please provide a valid password (max 32 characters)'})
})
.refine((data: any) => data.profilePassword === data.profilePasswordConfirm, {
    message: 'passwords do not match'
})