import Joi from "joi";

const profileSchema = Joi.object({
    avatar: Joi.string().required(),
    banner: Joi.string().required(),
    bio: Joi.string().required().min(5)
})

export default profileSchema