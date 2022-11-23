const mongoose = require('../connection/connection');

const Schema = mongoose.Schema;
const Product = new Schema({
    title: { type: String, required: true },
    description: { type: String},
    price: { type: Number},
    modified: { type: Date, default: Date.now }
});
const ProductModel = mongoose.model('Product', Product);

module.exports = ProductModel;