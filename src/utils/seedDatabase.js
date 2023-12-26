const mongoose = require('mongoose');
const Product = require('../models/Product');
const productsData = require('./productsData'); 

mongoose.connect('mongodb://localhost:27017/myStore')
  .then(() => console.log('MongoDB подключен для заполнения базы данных'))
  .then(() => Product.insertMany(productsData))
  .then(() => console.log('Данные успешно добавлены'))
  .catch(err => console.error(err))
  .finally(() => mongoose.disconnect());
