const express = require('express')
const getRouter = express.Router()
const Product = require('../models/product')
const Yarn = require('../models/yarn')

//Get Requests For Inventory
    //get all
getRouter.get("/inventory", async (req, res, next) => {
  try {
    const product = await Product.find() 
    return res.status(200).send(product) 
  } catch (err) {
    res.status(500)
    return next(err)
  }        
})
    //get one
getRouter.get("inventory/:productId", async (req, res, next) => {
  try {
    const getItem = await Product.findOne({_id: req.params.productId})    
    return res.status(200).send(getItem)  
  } catch (err) {
    res.status(500)
    return next(err)    
  }   
})

//Get Requests For Yarn
    //get all
getRouter.get("/yarn", async (req, res, next) => {
  try {
    const yarn = await Yarn.find()
    return res.status(200).send(yarn)
} catch (err) {
    res.status(500)
    return next(err)    
  }
})
    //get one
getRouter.get("/yarn/:yarnId", async (req, res, next) => {
  try {
    const getItem = await Yarn.findOne({_id: req.params.yarnId})
    return res.status(200).send(getItem)
  } catch (err) {
    res.status(500)
    return next(err)  
  }
})

module.exports = getRouter