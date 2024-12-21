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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController = __importStar(require("../controllers/authController"));
const authRouter = (0, express_1.Router)();
/**
 * @swagger
 * /register:
 *   post:
 *     summary: Register a new user
 *     description: Endpoint untuk mendaftarkan user baru
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullname:
 *                 type: string
 *                 description: Input your name
 *                 example: Moh Ryan Khalifatul Huda
 *               email:
 *                 type: string
 *                 description: Input your email
 *                 example: mohryan@gmail.com
 *               password:
 *                 type: string
 *                 description: Input your password
 *                 example: Optional
 *               role:
 *                 type: string
 *                 description: Input your role
 *                 example: USER
 *     responses:
 *       201:
 *         description: User berhasil didaftarkan
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID dari user baru
 *                   example: 1
 *                 fullname:
 *                   type: string
 *                   description: Nama user
 *                   example: John Doe
 */
authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login);
exports.default = authRouter;
