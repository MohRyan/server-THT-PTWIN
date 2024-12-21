"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const productSchema = joi_1.default.object({
    name_product: joi_1.default.string().required().min(5),
    img_product: joi_1.default.string().required(),
    price: joi_1.default.number().required(),
    description: joi_1.default.string().required().min(5),
    diskon: joi_1.default.number(),
    rating: joi_1.default.number(),
});
exports.default = productSchema;
