const mongoose = require('mongoose')

const sketchSchema = new mongoose.Schema({
  composer: {
    type: String,
    required: true
  },
  music: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
})

module.exports = mongoose.model('Sketch', sketchSchema)
