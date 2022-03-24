const { authJwt } = require("../middleware");
const orderController = require("../controllers/order.controller");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

     app.post(
    "/api/order/new/",
    [authJwt.verifyToken, authJwt.isAdmin],
	orderController.createOrder
  );
  
  app.get(
    "/api/order/list",
    [authJwt.verifyToken, authJwt.isAdmin],
    orderController.listOrder
);}
