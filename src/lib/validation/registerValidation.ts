import Joi from "joi";

// validation register default / basic
const registerSchema = Joi.object({
  name: Joi.string().required().min(5),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(8),
  gender: Joi.string().valid("PRIA", "WANITA").required(),
});

// validation register custom

// const registerSchema = Joi.object({
//     fullname: Joi.string().required().min(5),
//     email: Joi.string().email().required(),
//     password: Joi.string().required().min(8),
//     address: Joi.string().required(),
//     phone_number: Joi.string().required(),
//     gender: Joi.string().valid("Pria", "Wanita").required(),
//     role: Joi.string().valid("USER", "ADMIN").required()
// })

export default registerSchema;
