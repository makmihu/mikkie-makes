const express = require('express')
const yarnRouter = express.Router()
const Yarn = require('../models/yarn')


yarnRouter.route('/')
//Get All
  .get(async (req, res, next) => {
    try {
      const yarn = await Yarn.find()
      return res.status(200).send(yarn)
    } catch (err) {
      res.status(500)
      return next(err)  
    }
  })
//Save New
  .post(async (req, res, next) => {
    try {
      const newYarn = new Yarn(req.body)
      const savedYarn = await newYarn.save()
      return res.status(200).send(savedYarn)
    } catch (err) {
      res.status(500)
      return next(err)  
    }
  })

yarnRouter.route('/:yarnId')
//Get One
  .get(async (req, res, next) => {
    try {
      const getItem = await Yarn.findOne({_id: req.params.yarnId})
      return res.status(200).send(getItem)
    } catch (err) {
      res.status(500)
      return next(err) 
    }
  })
//Delete One
  .delete(async (req, res, next) => {
    try {
      const deleteItem = await Yarn.findOneAndDelete({_id: req.params.yarnId})
      return res.status(200).send(`${deleteItem.color} was removed from your yarn`)
    } catch (err) {
      res.status(500)
      return next(err)  
    }
  })
//Update One
  .put(async (req, res, next) => {
    try {
      const updatedYarn = await Yarn.findOneAndUpdate(
        {_id: req.params.yarnId}, //find this one to update
        req.body, //update the object with this data
        {new: true} //send back updated version
      )
      return res.status(200).send(updatedYarn)
    } catch (err) {
      res.status(500)
      return next(err)  
    }
  })

module.exports = yarnRouter