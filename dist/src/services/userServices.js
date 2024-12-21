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
exports.getSingleUser = exports.updateUser = exports.deleteUsers = exports.insertUser = exports.getUser = exports.getUserWithToken = void 0;
const db_1 = __importDefault(require("../lib/db"));
const error_1 = require("../utils/constant/error");
const getUserWithToken = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return db_1.default.users.findFirst({
        where: {
            id,
        },
        select: {
            id: true,
            name: true,
            email: true,
            gender: true,
            profile: true,
            product: true
        },
    });
});
exports.getUserWithToken = getUserWithToken;
const getUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    return db_1.default.users.findFirst({
        where: {
            id: userId,
        },
        select: {
            id: true,
            name: true,
            email: true,
            gender: true,
            profile: true,
            product: true
        },
    });
});
exports.getUser = getUser;
const insertUser = (body) => __awaiter(void 0, void 0, void 0, function* () {
    return yield db_1.default.users.create({
        data: body,
    });
});
exports.insertUser = insertUser;
const deleteUsers = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const existUser = yield db_1.default.users.findFirst({
        where: {
            id: userId,
        },
    });
    if (!existUser) {
        throw new Error(error_1.ERROR_MESSAGE.DATA_NOT_FOUND);
    }
    yield db_1.default.users.delete({
        where: {
            id: userId,
        },
    });
    return " Sukses delete user dengan id " + userId;
});
exports.deleteUsers = deleteUsers;
const updateUser = (userId, body) => __awaiter(void 0, void 0, void 0, function* () {
    const existUser = yield db_1.default.users.findFirst({
        where: {
            id: userId,
        },
    });
    if (!existUser) {
        throw new Error("User not found!!");
    }
    return db_1.default.users.update({
        where: {
            id: userId,
        },
        data: body,
    });
});
exports.updateUser = updateUser;
const getSingleUser = (condition) => __awaiter(void 0, void 0, void 0, function* () {
    return db_1.default.users.findFirst({
        where: condition,
    });
});
exports.getSingleUser = getSingleUser;
