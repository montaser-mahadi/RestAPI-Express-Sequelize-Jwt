var Sequelize = require("sequelize");
module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define("order", {
	 id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    productName: {
      type: Sequelize.STRING
    },
    suplier: {
      type: Sequelize.STRING
    },
    OrderDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: new Date()
    },
	/*OrderMap: {
        type: Sequelize.STRING
    },*/
	orderUser: {
      type: Sequelize.STRING
    }
  });

  return Order;
};
