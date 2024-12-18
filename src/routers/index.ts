import { Router } from "express";
import userRouter from "./userRouter";
import authRouter from "./authRouter";
import profileRouter from "./profileRouter";

const indexRouter = Router();

indexRouter.use(authRouter);
indexRouter.use("/user", userRouter);
indexRouter.use("/profile", profileRouter);

export default indexRouter;