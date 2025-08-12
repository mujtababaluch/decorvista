const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/designController');
const { protect, authorizeRole } = require('../middleware/auth');

router.get('/', ctrl.list);
router.get('/:id', ctrl.get);
router.post('/', protect, authorizeRole('admin','designer'), ctrl.create);
router.put('/:id', protect, authorizeRole('admin','designer'), ctrl.update);
router.delete('/:id', protect, authorizeRole('admin','designer'), ctrl.remove);

module.exports = router;
