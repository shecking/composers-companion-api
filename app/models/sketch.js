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
    selectedClefOption: {
      type: String
    }
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
