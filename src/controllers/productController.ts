import * as productService from "../services/productServices";
import { Request, Response } from "express";
import { errorHandler } from "../utils/errorHandler";

export const getAllProduct = async (req: Request, res: Response) => {
    try {
        const dataGetAllProduct = await productService.getAllProduct();
        res.status(200).json(dataGetAllProduct);
    } catch (error) {
        console.log("🚀 ~ getAllProduct ~ error:", error);

        return errorHandler(error, res);
    }
};

export const getSingleProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;

        const dataGetSingleProduct = await productService.getSingleProduct(
            productId
        );
        res.status(200).json(dataGetSingleProduct);
    } catch (error) {
        console.log("🚀 ~ getSingleProduct ~ error:", error)
        return errorHandler(error, res);
    }
};

export const insertProduct = async (req: Request, res: Response) => {
    try {
        const { body } = req;
        const { id } = res.locals.userId;

        const dataInsertProduct = await productService.insertProduct(body, id);

        res.status(200).json(dataInsertProduct);
    } catch (error) {
        console.log("🚀 ~ insertProduct ~ error:", error)
        return errorHandler(error, res);
    }
};

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;

        const messageDeleteProduct = await productService.deleteProduct(productId);

        res.status(200).json({ message: messageDeleteProduct });
    } catch (error) {
        console.log("🚀 ~ deleteProduct ~ error:", error)
        return errorHandler(error, res);
    }
};

export const updateProduct = async (req: Request, res: Response) => {
    try {
        const { body } = req;
        const { productId } = req.params;

        const dataUpdateProduct = await productService.updateProduct(
            productId,
            body
        );

        res.status(200).json(dataUpdateProduct);
    } catch (error) {
        console.log("🚀 ~ updateProduct ~ error:", error)
        return errorHandler(error, res);
    }
};