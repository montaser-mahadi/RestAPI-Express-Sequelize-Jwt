const db = require("../models");
const Order = db.order;
const Op = db.Sequelize.Op;

exports.createOrder = function (req, res) {
    // Save Product to Database
 const orderObj= {
    productName: req.body.productName,
    suplier: req.body.suplier,
	orderUser: req.body.user
  };
    Order.create(orderObj)
      .then(data => {
      res.send(data);
    })
	.catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Order."
      });
    });
};


exports.listOrder = (req, res) => {
	const orderObj = Order.findAll()
	.then(data => {
		res.send(data);
	})
		.catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving orders."
      });
    });
};



