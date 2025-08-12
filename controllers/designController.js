const Design = require('../models/Design');
exports.list = async (req,res) => {
  const designs = await Design.find().populate('designer');
  res.json(designs);
};
exports.get = async (req,res) => {
  const d = await Design.findById(req.params.id).populate('designer');
  if (!d) return res.status(404).json({ message: 'Not found' });
  res.json(d);
};
exports.create = async (req,res) => {
  const item = await Design.create(req.body);
  res.status(201).json(item);
};
exports.update = async (req,res) => {
  const item = await Design.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(item);
};
exports.remove = async (req,res) => {
  await Design.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
};
