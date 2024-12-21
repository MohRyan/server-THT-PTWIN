import { Product } from "@prisma/client";
import db from "../lib/db";
import productSchema from "../lib/validation/productValidation";
import { ERROR_MESSAGE } from "../utils/constant/error";
import { date } from "joi";
export const getAllProduct = async (): Promise<Product[] | null> => {
    return await db.product.findMany({
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
};

export const getSingleProduct = async (productId: string): Promise<Product | null> => {
    return await db.product.findFirst({
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
};

export const insertProduct = async (body: Product, id: string) => {

    const { error, value } = productSchema.validate(body);
    if (error?.details) {
        console.log("🚀 ~ insertProduct ~ error:", error)
        throw new Error(ERROR_MESSAGE.WRONG_INPUT)
    }
    const now = Date.now().toString();
    const sku = `${value.name_product.split(" ")[0].toUpperCase().slice(0, 5)}-${now.slice(now.length - 4)}`
    await db.product.create({
        data: { ...value, userId: id, sku, price: +value.price, diskon: +value.diskon, rating: +value.rating },
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
        data: { ...body, price: +body.price, diskon: +body.diskon!, rating: +body.rating! },
    });
};

