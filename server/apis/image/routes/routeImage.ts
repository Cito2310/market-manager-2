import { Router } from "express";
import { createImageMiddlewares } from "./middlewares/createImageMiddlewares";
import { getImages } from "../controllers/getImages";
import { createImage } from "../controllers/createImage";
import { deleteImageMiddlewares } from "./middlewares/deleteImageMiddlewares";
import { deleteImageById } from "../controllers/deleteImageById";
import { updateImageMiddlewares } from "./middlewares/updateImageMiddlewares";
import { updateImageById } from "../controllers/updateImageById";

export const routeImage = Router();

routeImage.post("/", createImageMiddlewares, createImage );

routeImage.get("/", getImages );

routeImage.delete("/:id", deleteImageMiddlewares, deleteImageById );

routeImage.put("/:id", updateImageMiddlewares, updateImageById );