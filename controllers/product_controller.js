//* initialise and set up the dependencies
const express = require('express');
const productData = require('../models/product_data');
const product = express.Router()

//* routes
//? test route
product.get('/', async (req, res) => {
    res.send("Hello World");
})

//? read all product datas
product.get('/all', async (req, res) => {
    const allFoundProducts = await productData.find({});

    try {
        res.status(200).json(allFoundProducts)
    } catch (err) {
        res.status(400).json({ error: err });
    }
})

//? create a product 
product.post('/', async (req, res) => {
    // productData.create(req.body, (err, createdProductData) => {
    //     if (err) {
    //         res.status(400).json({ error: err })
    //     }
    //     res.status(201).json(createdProductData)
    // })

    const createdProductData = await productData.create(req.body)

    try {
        res.status(201).json(createdProductData)
    } catch (err) {
        res.status(400).json({ error: err });
    }

})

//? read a product data
product.get('/:id', async (req, res) => {
    // productData.findById(req.params.id, (err, foundProductData) => {
    //     if (err) {
    //         res.status(400).json({ error: err })
    //     }
    //     res.status(200).json(foundProductData);
    // })

    const foundProductData = await productData.findById(req.params.id)

    try {
        res.status(200).json(foundProductData);
    } catch (err) {
        res.status(400).json({ error: err });
    }

})

//? update a product data
product.put('/:id', async (req, res) => {
    // productData.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedProductData) => {
    //     if (err) {
    //         res.status(400).json({ error: err })
    //     }
    //     res.status(200).json(updatedProductData);
    // })

    const updatedProductData = await productData.findByIdAndUpdate(req.params.id, req.body, { new: true })

    try {
        res.status(200).json(updatedProductData);
    } catch (err) {
        res.status(400).json({ error: err })
    }

})

//? delete a product data
product.delete('/:id', async (req, res) => {
    // productData.findByIdAndDelete(req.params.id, (err, deletedProduct) => {
    //     if (err) {
    //         res.status(400).json({ error: err })
    //     }
    //     res.status(200).json({ "id": deletedProduct._id });
    // })

    const deletedProduct = await productData.findByIdAndDelete(req.params.id);

    try {
        res.status(200).json({ "id": deletedProduct._id })
    } catch (err) {
        res.status(400).json({ error: err })
    }

})




module.exports = product;
