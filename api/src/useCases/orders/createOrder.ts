import { Request, Response } from "express";
import { Order } from "../../models/order";
import { io } from "../..";

export async function createOrder(req: Request, res: Response) {
  const { table, products } = req.body;

  try {
    const order = await Order.create({
      table,
      products: products || []
    });

    const orderDetails = await order.populate('products.product');

    // io.emit('neworder');
    io.emit('neworder', orderDetails);

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
