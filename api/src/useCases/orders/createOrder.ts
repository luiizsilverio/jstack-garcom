import { Request, Response } from "express";
import { Order } from "../../models/order";

export async function createOrder(req: Request, res: Response) {
  const { table, products } = req.body;

  try {
    const order = await Order.create({
      table,
      products: products || []
    });

    res.status(201).json(order);
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
