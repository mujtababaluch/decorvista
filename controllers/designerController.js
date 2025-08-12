const Designer = require('../models/Designer');
exports.list = async (req,res) => res.json(await Designer.find());
exports.get = async (req,res) => {
  const p = await Designer.findById(req.params.id);
  if(!p) return res.status(404).json({message:'Not found'});
  res.json(p);
};
exports.create = async (req,res) => res.status(201).json(await Designer.create(req.body));
exports.update = async (req,res) => res.json(await Designer.findByIdAndUpdate(req.params.id, req.body, { new: true }));
exports.remove = async (req,res) => { await Designer.findByIdAndDelete(req.params.id); res.json({message:'Deleted'}); };
