const router = require('express').Router();

const upload = require('../libs/storange');

const { findProducts, saveProduct } = require('../controllers/products');

router.post('/api/products', upload.single('img'), saveProduct);
router.get('/api/products', findProducts);

module.exports = router;
