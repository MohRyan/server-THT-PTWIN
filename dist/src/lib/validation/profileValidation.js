"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const profileSchema = joi_1.default.object({
    avatar: joi_1.default.string().required(),
    banner: joi_1.default.string().required(),
    bio: joi_1.default.string().required().min(5)
});
exports.default = profileSchema;
