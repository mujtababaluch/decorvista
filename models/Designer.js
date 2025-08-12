const mongoose = require('mongoose');
const designerSchema = new mongoose.Schema({
  name: String,
  bio: String,
  portfolio: [String],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });
module.exports = mongoose.model('Designer', designerSchema);
