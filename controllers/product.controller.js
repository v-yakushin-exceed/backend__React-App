const Product = require('../models/product.model');

exports.product_create = function (req, res) {
    let product = new Product(
        {
            text: req.body.text,
            status: req.body.status,
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send(product)
    })
};

exports.product_details = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) { 
            return next(err);
         }
        res.send(product);
    })
};

exports.product_details_all = function (req, res) {
    Product.find({}, function (err, products) {
        if (err) { 
            return next(err); 
        }
        res.send(products);
    })
};

exports.product_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, { $set: {"status" : !req.body.status} }, function (err, product) {
        if (err) {
            return next(err);
        } 
        res.send(product);
    });
};

exports.product_modify = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, { $set: {"text" : req.body.text} }, function (err, product) {
        if (err) {
            return next(err);
        } 
        console.log('PRODUCT', req.body.text)
        res.send(product);
    });
};

exports.product_update_all = function (req, res) {
    Product.updateMany({}, function (err, products) {
        if (err) {
            return next(err);
        }
        res.send('Update successfully!');
    });
};

exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

exports.product_delete_all = function (req, res) {
    Product.deleteMany( { status: "true" }  , function (err, products) {
        if (err) { 
            return next(err);   
        }
        res.send(products);
    })
};
 

