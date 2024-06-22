const mongoose = require('mongoose')
const Schema = mongoose.Schema

const yarnSchema = new Schema({
  color: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  numberWeight: {
    type: Number,
    required: true,
  },
  material: {
    type: String,
    required: true,
  },
  brandCollection: String,
})

module.exports = mongoose.model('Yarn', yarnSchema)