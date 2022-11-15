import { Request, Response } from "express";
import { Product } from "../../models/product";

export async function listProductsByCategory(req: Request, res: Response) {
  const { categoryId } = req.params;

  try {
    const products = await Product.where('category', categoryId);

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
