import { Router } from "express";
import { createCategory } from "../controllers/createCategory";
import { createCategoryMiddlewares } from "./middlewares/createCategoryMiddlewares";
import { deleteCategoryMiddlewares } from "./middlewares/deleteCategoryMiddlewares";
import { deleteCategoryById } from "../controllers/deleteCategoryById";
import { updateCategoryById } from "../controllers/updateCategoryById";
import { updateCategoryMiddlewares } from "./middlewares/updateCategoryMiddlewares";
import { getCategories } from "../controllers/getCategories";

export const routeCategory = Router();

routeCategory.post("/", createCategoryMiddlewares, createCategory );

routeCategory.get("/", getCategories );

routeCategory.delete("/:id", deleteCategoryMiddlewares, deleteCategoryById );

routeCategory.put("/:id", updateCategoryMiddlewares, updateCategoryById );