//* import and create app
require('dotenv-safe').config()
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const productData = require('./controllers/product_controller');

///* connect to mongoose
const MONGO_URI = process.env.MONGO_URI
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
})
mongoose.connection.once("open", () => {
    console.log('connected to mongo:', MONGO_URI)
})

//* middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//* defining endpoints
app.use('/api/products', productData);

//* port listening
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log("🎉🎊", "celebrations happening on port", PORT, "🎉🎊")
})