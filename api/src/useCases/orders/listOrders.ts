import { Request, Response } from "express";
import { Order } from "../../models/order";

export async function listOrders(req: Request, res: Response) {

  try {
    const orders = await Order.find();

    res.json(orders);
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
