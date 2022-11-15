import { Request, Response } from "express";
import { Order } from "../../models/order";

export async function changeOrderStatus(req: Request, res: Response) {
  const { orderId } = req.params;
  const { status } = req.body;

  if (!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)) {
    return res.status(400).json({
      error: 'Invalid Status. Valid Status: WAITING, IN_PRODUCTION, DONE'
    })
  }

  try {

    await Order.findByIdAndUpdate(orderId, { status });

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
