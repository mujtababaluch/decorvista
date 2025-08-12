const mongoose = require('mongoose');
const designSchema = new mongoose.Schema({
  title: String,
  description: String,
  images: [String],
  designer: { type: mongoose.Schema.Types.ObjectId, ref: 'Designer' },
  price: Number
}, { timestamps: true });
module.exports = mongoose.model('Design', designSchema);
