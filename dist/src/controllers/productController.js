"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct = exports.deleteProduct = exports.insertProduct = exports.getSingleProduct = exports.getAllProduct = void 0;
const productService = __importStar(require("../services/productServices"));
const errorHandler_1 = require("../utils/errorHandler");
const getAllProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dataGetAllProduct = yield productService.getAllProduct();
        res.status(200).json(dataGetAllProduct);
    }
    catch (error) {
        console.log("🚀 ~ getAllProduct ~ error:", error);
        return (0, errorHandler_1.errorHandler)(error, res);
    }
});
exports.getAllProduct = getAllProduct;
const getSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const dataGetSingleProduct = yield productService.getSingleProduct(productId);
        res.status(200).json(dataGetSingleProduct);
    }
    catch (error) {
        console.log("🚀 ~ getSingleProduct ~ error:", error);
        return (0, errorHandler_1.errorHandler)(error, res);
    }
});
exports.getSingleProduct = getSingleProduct;
const insertProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const { id } = res.locals.userId;
        const dataInsertProduct = yield productService.insertProduct(body, id);
        res.status(200).json(dataInsertProduct);
    }
    catch (error) {
        console.log("🚀 ~ insertProduct ~ error:", error);
        return (0, errorHandler_1.errorHandler)(error, res);
    }
});
exports.insertProduct = insertProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const messageDeleteProduct = yield productService.deleteProduct(productId);
        res.status(200).json({ message: messageDeleteProduct });
    }
    catch (error) {
        console.log("🚀 ~ deleteProduct ~ error:", error);
        return (0, errorHandler_1.errorHandler)(error, res);
    }
});
exports.deleteProduct = deleteProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const { productId } = req.params;
        const dataUpdateProduct = yield productService.updateProduct(productId, body);
        res.status(200).json(dataUpdateProduct);
    }
    catch (error) {
        console.log("🚀 ~ updateProduct ~ error:", error);
        return (0, errorHandler_1.errorHandler)(error, res);
    }
});
exports.updateProduct = updateProduct;
