const Consultation = require('../models/Consultation');
exports.create = async (req,res) => {
  const body = Object.assign({}, req.body);
  if(req.user) body.user = req.user._id;
  const c = await Consultation.create(body);
  res.status(201).json(c);
};
exports.getByUser = async (req,res) => res.json(await Consultation.find({ user: req.params.id }).populate('designer user'));
exports.getByDesigner = async (req,res) => res.json(await Consultation.find({ designer: req.params.id }).populate('designer user'));
exports.update = async (req,res) => res.json(await Consultation.findByIdAndUpdate(req.params.id, req.body, { new: true }));
exports.remove = async (req,res) => { await Consultation.findByIdAndDelete(req.params.id); res.json({message:'Deleted'}); };
