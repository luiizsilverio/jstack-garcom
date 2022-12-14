import { Request, Response } from "express";
import { Category } from "../../models/category";

export async function createCategory(req: Request, res: Response) {
  const { name, icon } = req.body;

  try {
    const category = await Category.create({
      name,
      icon,
    });

    res.status(201).json(category);
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
