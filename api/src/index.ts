import express from 'express';
import path from 'node:path';
import mongoose from 'mongoose';
import { router } from './router';

mongoose.connect('mongodb://localhost:27017/garcom')
  .then(() => {
    const app = express();

    app.use('/uploads', express.static(
      path.resolve(__dirname, '..', 'uploads'))
    );

    app.use(express.json());
    app.use(router);

    const port = 3000;

    app.listen(port, () => {
      console.log(`Rodando API-Garcom na porta ${port}`);
    })
  })
  .catch(() => console.warn('erro ao conectar no mongodb'));



