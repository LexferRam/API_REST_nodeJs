const express = require('express');
const router = express.Router();
const {
    getProducts,
    addProducts,
    getSingleProducts,
    updateProducts,
    deleteProducts
} = require('../Controllers/productsRoutes');

router.get('/', getProducts);
router.post('/', addProducts);
router.get('/:id', getSingleProducts);
router.put('/:id', updateProducts);
router.delete('/:id', deleteProducts);

module.exports = router;

