import { Router } from "express";
import userRouter from "./userRouter";
import authRouter from "./authRouter";
import profileRouter from "./profileRouter";
import productRouter from "./productRouter";

const indexRouter = Router();

indexRouter.use(authRouter);

indexRouter.use("/user", userRouter);
indexRouter.use("/profile", profileRouter);
indexRouter.use("/product", productRouter);

export default indexRouter;
