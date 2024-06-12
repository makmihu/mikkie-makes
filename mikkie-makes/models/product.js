const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  imgUrl: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ["", 'Plushie', 'Keychain', 'Amigurumi', 'Floral', 'Other']
  }, 
  size: {
    type: String,
    required: true
  },
  madeToOrder: {
    type: Boolean,
    required: true
  },
  colorOptions: Number,
  materials: Array,
  yarnWeight: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('Product', productSchema)