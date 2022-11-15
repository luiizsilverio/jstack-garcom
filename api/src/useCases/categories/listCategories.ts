import { Request, Response } from "express";
import { Category } from "../../models/category";

export async function listCategories(req: Request, res: Response) {

  try {
    const categories = await Category.find();

    res.json(categories);
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
