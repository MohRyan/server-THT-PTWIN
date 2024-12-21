import { Router } from "express";
import * as authController from "../controllers/authController";

const authRouter = Router();

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

export default authRouter;
