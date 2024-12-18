import * as profileService from "../services/profileServices";
import { Request, Response } from "express";
import { errorHandler } from "../utils/errorHandler";

export const insertProfile = async (req: Request, res: Response) => {
    try {
        const { body } = req;
        const { id } = res.locals.userId;

        const dataInsertProfile = await profileService.insertProfile(body, id);

        res.status(200).json(dataInsertProfile);
    } catch (error) {
        console.log("🚀 ~ insertProfile ~ error:", error);

        return errorHandler(error, res);
    }
};

export const deleteProfile = async (req: Request, res: Response) => {
    try {
        const { id } = res.locals.userId;

        const messageDeleteProfile = await profileService.deleteProfile(id);

        res.status(200).json({ message: messageDeleteProfile });
    } catch (error) {
        console.log("🚀 ~ deleteProfile ~ error:", error)

        return errorHandler(error, res);
    }
};

export const updateProfile = async (req: Request, res: Response) => {
    try {
        const { body } = req;
        const { id } = res.locals.userId;

        const dataUpdateProfile = await profileService.updateProfile(id, body);

        res.status(200).json(dataUpdateProfile);
    } catch (error) {
        console.log("🚀 ~ updateProfile ~ error:", error)

        return errorHandler(error, res);
    }
};