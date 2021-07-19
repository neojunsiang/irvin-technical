//* initialisation and setting up of product_data
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//* defining the schema for mongoDB
const productDataSchema = new Schema(
    {
        name: { type: String, required: true },
        price: { type: mongoose.Types.Decimal128, required: true },
        description: { type: String },
        image: { type: String },
        tags: [String]
    }
    , { timestamps: true }
)

//* instantiate a model
const ProductData = mongoose.model("ProductData", productDataSchema);

//* export module
module.exports = ProductData;