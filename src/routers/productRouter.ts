import { Router } from "express";
import * as productController from "../controllers/productController";
import authentication from "../middlewares/authentication";

const productRouter = Router();

productRouter.get("/", productController.getAllProduct);
productRouter.get("/:productId", productController.getSingleProduct);
productRouter.post("/", authentication, productController.insertProduct);
productRouter.delete("/:productId", authentication, productController.deleteProduct);
productRouter.put("/:productId", authentication, productController.updateProduct);

export default productRouter