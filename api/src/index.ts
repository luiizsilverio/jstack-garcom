import express from 'express';
import mongoose from 'mongoose';
import { router } from './router';

mongoose.connect('mongodb://localhost:27017/garcom')
  .then(() => {
    const app = express();

    app.use(express.json());
    app.use(router);

    const port = 3001;

    app.listen(port, () => {
      console.log(`Rodando API-Garcom na porta ${port}`);
    })
  })
  .catch(() => console.warn('erro ao conectar no mongodb'));



