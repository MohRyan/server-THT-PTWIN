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
exports.updateProfile = exports.deleteProfile = exports.insertProfile = void 0;
const profileService = __importStar(require("../services/profileServices"));
const errorHandler_1 = require("../utils/errorHandler");
const insertProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const { id } = res.locals.userId;
        const dataInsertProfile = yield profileService.insertProfile(body, id);
        res.status(200).json(dataInsertProfile);
    }
    catch (error) {
        console.log("🚀 ~ insertProfile ~ error:", error);
        return (0, errorHandler_1.errorHandler)(error, res);
    }
});
exports.insertProfile = insertProfile;
const deleteProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = res.locals.userId;
        const messageDeleteProfile = yield profileService.deleteProfile(id);
        res.status(200).json({ message: messageDeleteProfile });
    }
    catch (error) {
        console.log("🚀 ~ deleteProfile ~ error:", error);
        return (0, errorHandler_1.errorHandler)(error, res);
    }
});
exports.deleteProfile = deleteProfile;
const updateProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const { id } = res.locals.userId;
        const dataUpdateProfile = yield profileService.updateProfile(id, body);
        res.status(200).json(dataUpdateProfile);
    }
    catch (error) {
        console.log("🚀 ~ updateProfile ~ error:", error);
        return (0, errorHandler_1.errorHandler)(error, res);
    }
});
exports.updateProfile = updateProfile;
