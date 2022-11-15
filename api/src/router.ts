import { Router } from 'express';
import { createCategory } from './useCases/categories/createCategories';
import { listCategories } from './useCases/categories/listCategories';

export const router = Router();

// List categories
router.get('/categories', listCategories);

// Create category
router.post('/categories', createCategory);

// List products
router.get('/products', (req, res) => {
  res.send('list products');
})

// Create product
router.post('/products', (req, res) => {
  res.send('create product');
})

// Get products by category
router.get('/categories/:categoryId/products', (req, res) => {
  res.send('list products by category');
})

// List orders
router.get('/orders', (req, res) => {
  res.send('list orders');
})

// Create order
router.post('/orders', (req, res) => {
  res.send('create order');
})

// Change order status
router.patch('/orders/:orderId', (req, res) => {
  res.send('change order status');
})

// Delete order
router.delete('/orders/:orderId', (req, res) => {
  res.send('delete order');
})
