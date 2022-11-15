import { Request, Response } from "express";
import { Product } from "../../models/product";

export async function listProducts(req: Request, res: Response) {

  try {
    const products = await Product.find();

    res.json(products);
  }
  catch (err) {
    if (err instanceof Error) {
      res.status(500).json({
        error: err.message
      })
    } else {
      res.status(500).json({
        error: 'Internal Error'
      })
    }
  }
}
