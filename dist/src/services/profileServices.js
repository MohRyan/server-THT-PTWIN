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
exports.updateProfile = exports.deleteProfile = exports.insertProfile = void 0;
const db_1 = __importDefault(require("../lib/db"));
const profileValidation_1 = __importDefault(require("../lib/validation/profileValidation"));
const error_1 = require("../utils/constant/error");
const insertProfile = (body, id) => __awaiter(void 0, void 0, void 0, function* () {
    const { error, value } = profileValidation_1.default.validate(body);
    if (error === null || error === void 0 ? void 0 : error.details) {
        console.log("🚀 ~ insertProfile ~ error:", error);
        throw new Error(error_1.ERROR_MESSAGE.WRONG_INPUT);
    }
    return yield db_1.default.profile.create({
        data: Object.assign(Object.assign({}, value), { userId: id })
    });
});
exports.insertProfile = insertProfile;
const deleteProfile = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield db_1.default.profile.delete({
        where: {
            userId: id
        }
    });
    return "Sukses delete profile";
});
exports.deleteProfile = deleteProfile;
const updateProfile = (id, body) => __awaiter(void 0, void 0, void 0, function* () {
    return db_1.default.profile.update({
        where: {
            userId: id
        },
        data: body
    });
});
exports.updateProfile = updateProfile;
