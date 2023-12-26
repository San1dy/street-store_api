const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Это должно быть в верхней части
const productRoutes = require('./src/routers/productRoutes');

const app = express();

app.use(cors({
  origin: 'http://localhost:8080'
})); // CORS должен быть настроен до определения маршрутов

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/myStore')
  .then(() => console.log('MongoDB подключен'))
  .catch(err => console.error(err));

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
