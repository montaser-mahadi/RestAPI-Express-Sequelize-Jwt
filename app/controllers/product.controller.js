const db = require("../models");
const Product = db.product;
const Op = db.Sequelize.Op;

exports.createProduct = function (req, res) {
    // Save Product to Database
 const productObj= {
    productName: req.body.productName,
    productPrice: req.body.productPrice,
    productQty: req.body.productQty,
    productTax: req.body.productTax
  };
    Product.create(productObj)
      .then(data => {
      res.send(data);
    })
	.catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};


exports.listProduct = (req, res) => {
	const productObj = Product.findAll()
	.then(data => {
		res.send(data);
	})
		.catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};



