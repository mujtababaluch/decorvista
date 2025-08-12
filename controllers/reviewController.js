const Review = require('../models/Review');
exports.create = async (req,res) => {
  const body = Object.assign({}, req.body);
  if(req.user) body.user = req.user._id;
  const r = await Review.create(body);
  res.status(201).json(r);
};
exports.listByProduct = async (req,res) => res.json(await Review.find({ product: req.params.productId }).populate('user'));
exports.listByDesigner = async (req,res) => res.json(await Review.find({ designer: req.params.designerId }).populate('user'));
