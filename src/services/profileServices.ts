import { Profile } from "@prisma/client";
import db from "../lib/db";
import profileSchema from "../lib/validation/profileValidation";
import { ERROR_MESSAGE } from "../utils/constant/error";

export const insertProfile = async (body: Profile, id: string): Promise<Profile> => {

    const { error, value } = profileSchema.validate(body);
    if (error?.details) {
        console.log("🚀 ~ insertProfile ~ error:", error)
        throw new Error(ERROR_MESSAGE.WRONG_INPUT)
    }

    return await db.profile.create({
        data: { ...value, userId: id }
    })
};

export const deleteProfile = async (id: string): Promise<string> => {
    await db.profile.delete({
        where: {
            userId: id
        }
    })

    return "Sukses delete profile";
}

export const updateProfile = async (id: string, body: Profile): Promise<Profile> => {
    return db.profile.update({
        where: {
            userId: id
        },
        data: body
    })
}