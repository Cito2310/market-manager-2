import { Request, Response, NextFunction } from "express";
import { Product } from "../../models/productModels";

export const attachProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params!.id;
    const product = await Product.findById(id);

    if (!req.body) req.body = {};
    req.body.product = product;

    next();
  } catch (err) {
    next(err);
  }
};