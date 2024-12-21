"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct = exports.deleteProduct = exports.insertProduct = exports.getSingleProduct = exports.getAllProduct = void 0;
const db_1 = __importDefault(require("../lib/db"));
const productValidation_1 = __importDefault(require("../lib/validation/productValidation"));
const error_1 = require("../utils/constant/error");
const getAllProduct = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield db_1.default.product.findMany({
        include: {
            user: {
                select: {
                    name: true,
                    email: true,
                    gender: true,
                    profile: {
                        select: {
                            avatar: true
                        }
                    }
                }
            },
        }
    });
});
exports.getAllProduct = getAllProduct;
const getSingleProduct = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield db_1.default.product.findFirst({
        where: {
            id: productId,
        },
        include: {
            user: {
                select: {
                    name: true,
                    email: true,
                    gender: true,
                    profile: {
                        select: {
                            avatar: true
                        }
                    }
                }
            }
        }
    });
});
exports.getSingleProduct = getSingleProduct;
const insertProduct = (body, id) => __awaiter(void 0, void 0, void 0, function* () {
    const { error, value } = productValidation_1.default.validate(body);
    if (error === null || error === void 0 ? void 0 : error.details) {
        console.log("🚀 ~ insertProduct ~ error:", error);
        throw new Error(error_1.ERROR_MESSAGE.WRONG_INPUT);
    }
    const now = Date.now().toString();
    const sku = `${value.name_product.split(" ")[0].toUpperCase().slice(0, 5)}-${now.slice(now.length - 4)}`;
    yield db_1.default.product.create({
        data: Object.assign(Object.assign({}, value), { userId: id, sku, price: +value.price, diskon: +value.diskon, rating: +value.rating }),
    });
});
exports.insertProduct = insertProduct;
const deleteProduct = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    yield db_1.default.product.delete({
        where: {
            id: productId,
        },
    });
    return "Sukses delete product dengan id " + productId;
});
exports.deleteProduct = deleteProduct;
const updateProduct = (productId, body) => __awaiter(void 0, void 0, void 0, function* () {
    return db_1.default.product.update({
        where: {
            id: productId,
        },
        data: Object.assign(Object.assign({}, body), { price: +body.price, diskon: +body.diskon, rating: +body.rating }),
    });
});
exports.updateProduct = updateProduct;
