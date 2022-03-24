var Sequelize = require("sequelize");
module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("product", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
	productName: {
      type: Sequelize.STRING
    },
    productPrice: {
      type: Sequelize.INTEGER
    },
    productQty: {
      type: Sequelize.INTEGER
    },
	productTax: {
      type: Sequelize.INTEGER
    }
  });

  return Product;
};
