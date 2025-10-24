import { Router } from "express";
import { createProduct } from "../controllers/createProduct";
import { createProductMiddlewares } from "./middlewares/createProductMiddlewares";
import { getProduct } from "../controllers/getProducts";
import { deleteProductMiddlewares } from "./middlewares/deleteProductMiddlewares";
import { deleteProductById } from "../controllers/deleteProductById";
import { updateProductById } from "../controllers/updateProductById";
import { updateProductMiddlewares } from "./middlewares/updateProductMiddlewares";

export const routeProduct = Router();

routeProduct.post("/", createProductMiddlewares, createProduct );

routeProduct.get("/", getProduct );

routeProduct.delete("/:id", deleteProductMiddlewares, deleteProductById );

routeProduct.put("/:id", updateProductMiddlewares, updateProductById );