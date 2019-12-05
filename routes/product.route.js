const express = require('express');
const router = express.Router();
const product_controller = require('../controllers/product.controller');

router.post('/create', product_controller.product_create);
router.get('/todo/:id', product_controller.product_details);
router.get('/all', product_controller.product_details_all);
router.put('/update/:id', product_controller.product_update);
router.put('/modify/:id', product_controller.product_modify);
router.delete('/delete/:id', product_controller.product_delete);
router.delete('/deleteAll/all', product_controller.product_delete_all);
module.exports = router;