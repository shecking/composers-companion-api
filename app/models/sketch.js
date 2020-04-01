const mongoose = require('mongoose')

const sketchSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  composer: {
    type: String
  },
  clef: {
    type: String,
    required: true
  },
  key: {
    type: String
  },
  meter: {
    type: String
  },
  tempo: {
    type: String
  },
  length: {
    type: String
  },
  notes: {
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
