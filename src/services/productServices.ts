import { Product } from "@prisma/client";
import db from "../lib/db";
import productSchema from "../lib/validation/productValidation";
import { ERROR_MESSAGE } from "../utils/constant/error";
import { date } from "joi";
export const getAllProduct = async (): Promise<Product[] | null> => {
    return await db.product.findMany();
};

export const getSingleProduct = async (productId: string): Promise<Product | null> => {
    return await db.product.findFirst({
        where: {
            id: productId,
        },
    });
};

export const insertProduct = async (body: Product, id: string): Promise<Product> => {

    const { error, value } = productSchema.validate(body);
    if (error?.details) {
        console.log("🚀 ~ insertProduct ~ error:", error)
        throw new Error(ERROR_MESSAGE.WRONG_INPUT)
    }
    const now = Date.now().toString();
    const sku = `${value.name_product.split(" ")[0].toUpperCase()}-${now.slice(now.length - 4)}`
    return await db.product.create({
        data: { ...value, userId: id, sku },
    });
};

export const deleteProduct = async (productId: string): Promise<string> => {
    await db.product.delete({
        where: {
            id: productId,
        },
    });

    return "Sukses delete product dengan id " + productId;
};

export const updateProduct = async (productId: string, body: Product): Promise<Product> => {
    return db.product.update({
        where: {
            id: productId,
        },
        data: body,
    });
};

