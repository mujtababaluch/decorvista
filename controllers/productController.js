const Product = require('../models/Product');
exports.list = async (req,res) => res.json(await Product.find());
exports.get = async (req,res) => {
  const p = await Product.findById(req.params.id);
  if(!p) return res.status(404).json({message:'Not found'});
  res.json(p);
};
exports.create = async (req,res) => res.status(201).json(await Product.create(req.body));
exports.update = async (req,res) => res.json(await Product.findByIdAndUpdate(req.params.id, req.body, { new: true }));
exports.remove = async (req,res) => { await Product.findByIdAndDelete(req.params.id); res.json({message:'Deleted'}); };
