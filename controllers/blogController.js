const Blog = require('../models/Blog');
exports.list = async (req,res) => res.json(await Blog.find());
exports.get = async (req,res) => res.json(await Blog.findById(req.params.id));
exports.create = async (req,res) => res.status(201).json(await Blog.create(req.body));
exports.update = async (req,res) => res.json(await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true }));
exports.remove = async (req,res) => { await Blog.findByIdAndDelete(req.params.id); res.json({message:'Deleted'}); };
