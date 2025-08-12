const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/productController');
const { protect, authorizeRole } = require('../middleware/auth');

router.get('/', ctrl.list);
router.get('/:id', ctrl.get);
router.post('/', protect, authorizeRole('admin'), ctrl.create);
router.put('/:id', protect, authorizeRole('admin'), ctrl.update);
router.delete('/:id', protect, authorizeRole('admin'), ctrl.remove);

module.exports = router;
