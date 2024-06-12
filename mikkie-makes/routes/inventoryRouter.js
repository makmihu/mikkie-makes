const express = require('express')
const inventoryRouter = express.Router()
const Product = require('../models/product')


inventoryRouter.route('/')
//Get All
  .get(async (req, res, next) => {
    try {
      const product = await Product.find() 
      return res.status(200).send(product)
    } catch (err) {
      res.status(500)
      return next(err) 
    }
  })
//Save New
  .post(async (req, res, next) => {
    try {
      const newProduct = new Product(req.body)
      const savedProduct = await newProduct.save()
      return res.status(200).send(savedProduct)
    } catch (err) {
      res.status(500)
      return next(err)      
    }
  })

inventoryRouter.route('/:productId')
//Get One
  .get(async (req, res, next) => {
    try {
      const getItem = await Product.findOne({_id: req.params.productId})
      return res.status(200).send(getItem)  
    } catch (err) {
      res.status(500)
      return next(err)  
    }
  })
//Delete One
  .delete(async (req, res, next) => {
    try {
      const deleteItem = await Product.findOneAndDelete({_id: req.params.productId})
      return res.status(200).send(`${deleteItem.name} was removed from your Inventory`)
    } catch (err) {
      res.status(500)
      return next(err)  
    }
  })
//Update One
  .put(async (req, res, next) => {
    try {
      const updatedProduct = await Product.findOneAndUpdate(
        {_id: req.params.productId}, //find this one to update
        req.body, //update the object with this data
        {new: true}) //send back updated version
        return res.status(200).send(updatedProduct)      
    } catch (err) {
      res.status(500)
      return next(err)  
    }
  })

module.exports = inventoryRouter