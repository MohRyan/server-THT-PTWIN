import { Router } from "express";
import * as profileController from "../controllers/profileController";
import authentication from "../middlewares/authentication";

const profileRouter = Router();

profileRouter.post("/", authentication, profileController.insertProfile);
profileRouter.delete("/", authentication, profileController.deleteProfile);
profileRouter.patch("/", authentication, profileController.updateProfile);

export default profileRouter