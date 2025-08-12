const mongoose = require('mongoose');
const consultationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  designer: { type: mongoose.Schema.Types.ObjectId, ref: 'Designer' },
  datetime: Date,
  notes: String,
  status: { type: String, enum: ['pending','confirmed','cancelled','done'], default: 'pending' }
}, { timestamps: true });
module.exports = mongoose.model('Consultation', consultationSchema);
