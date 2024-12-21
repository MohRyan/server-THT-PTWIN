"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRouter_1 = __importDefault(require("./userRouter"));
const authRouter_1 = __importDefault(require("./authRouter"));
const profileRouter_1 = __importDefault(require("./profileRouter"));
const productRouter_1 = __importDefault(require("./productRouter"));
const indexRouter = (0, express_1.Router)();
indexRouter.use(authRouter_1.default);
indexRouter.use("/user", userRouter_1.default);
indexRouter.use("/profile", profileRouter_1.default);
indexRouter.use("/product", productRouter_1.default);
exports.default = indexRouter;
