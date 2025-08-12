const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/reviewController');
const { protect } = require('../middleware/auth');

router.post('/', protect, ctrl.create);
router.get('/product/:productId', ctrl.listByProduct);
router.get('/designer/:designerId', ctrl.listByDesigner);

module.exports = router;
