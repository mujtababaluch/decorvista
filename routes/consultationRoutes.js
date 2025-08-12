const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/consultationController');
const { protect, authorizeRole } = require('../middleware/auth');

router.post('/', protect, ctrl.create);
router.get('/user/:id', protect, ctrl.getByUser);
router.get('/designer/:id', protect, ctrl.getByDesigner);
router.put('/:id', protect, ctrl.update);
router.delete('/:id', protect, ctrl.remove);

module.exports = router;
