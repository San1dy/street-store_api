const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: Number,
  name: String,
  brand: String,
  price: String,
  floor: String,
  color: String,
  size: [String],
  buy: String,
  description: String,
  image: String,
  images: [String]
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
