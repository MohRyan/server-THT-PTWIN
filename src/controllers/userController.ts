import { Request, Response } from "express";
import * as userService from "../services/userServices";
import { errorHandler } from "../utils/errorHandler";

export const getUserWithToken = async (req: Request, res: Response) => {
  try {
    const { id } = res.locals.userId;

    const dataUser = await userService.getUserWithToken(id);

    res.status(200).json(dataUser);
  } catch (error) {
    console.log("🚀 ~ getUser ~ error:", error);

    const err = error as unknown as Error;

    res.status(500).json({
      message: err.message,
    });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const dataUser = await userService.getUser(userId);

    res.status(200).json(dataUser);
  } catch (error) {
    console.log("🚀 ~ getUser ~ error:", error);

    const err = error as unknown as Error;

    res.status(500).json({
      message: err.message,
    });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { body } = req;

    const dataInsertUser = await userService.insertUser(body);

    res.status(200).json(dataInsertUser);
  } catch (error) {
    console.log("🚀 ~ createUser ~ error:", error);

    const err = error as unknown as Error;

    res.status(500).json({
      message: err.message,
    });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const messageDeleteUser = await userService.deleteUsers(userId);

    res.status(200).json({ message: messageDeleteUser });
  } catch (error) {
    console.log("🚀 ~ deleteUser ~ error:", error);

    return errorHandler(error, res);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { body, params } = req;
    const { userId } = params;

    const dataUpdateUser = await userService.updateUser(userId, body);

    res.status(200).json(dataUpdateUser);
  } catch (error) {
    console.log("🚀 ~ updateUser ~ error:", error);

    const err = error as unknown as Error;

    res.status(500).json({
      message: err.message,
    });
  }
};
