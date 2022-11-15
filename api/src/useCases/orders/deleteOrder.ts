import { Request, Response } from "express";
import { Order } from "../../models/order";

export async function deleteOrder(req: Request, res: Response) {
  const { orderId } = req.params;

  try {

    await Order.findByIdAndDelete(orderId);

    res.status(204).send(); // ou res.sendStatus(204);
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
