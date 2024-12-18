import Joi from "joi";

const productSchema = Joi.object({
    name_product: Joi.string().required().min(5),
    img_product: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().required().min(5),
    diskon: Joi.number(),
    rating: Joi.number(),
});

export default productSchema