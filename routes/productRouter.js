const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const productController = require("../controllers/productController");

router
  .route("/")
  .get(productController.getAllProduct)
  .post(
    body("name")
      .notEmpty()
      .withMessage("Mahsulot nomi bo'sh bo'lishi mumkin emas")
      .isLength({ min: 3 })
      .withMessage("Mahsulot nomi kamida 3 ta belgidan iborat bo'lishi kerak"),
    body("price")
      .notEmpty()
      .withMessage("Mahsulot narxi bo'sh bo'lishi mumkin emas")
      .isInt({ min: 100 })
      .withMessage(
        "Mahsulot narxi eng kamida 3 ta belgidan iborat bo'lishi kerak"
      ),
    body("categoryId")
      .notEmpty()
      .withMessage(
        "Mahsulotning qaysi Categoriyaga tegishliligi bo'sh bo'lmasligi kerak"
      ),
    productController.createProduct
  );

router
  .route("/:id")
  .get(productController.getByIdProduct)
  .put(
    body("name")
      .notEmpty()
      .withMessage("Mahsulot nomi bo'sh bo'lishi mumkin emas")
      .isLength({ min: 3 })
      .withMessage("Mahsulot nomi kamida 3 ta belgidan iborat bo'lishi kerak"),
    body("price")
      .notEmpty()
      .withMessage("Mahsulot narxi bo'sh bo'lishi mumkin emas")
      .isInt({ min: 100 })
      .withMessage(
        "Mahsulot narxi eng kamida 3 ta belgidan iborat bo'lishi kerak"
      ),
    body("categoryId")
      .notEmpty()
      .withMessage(
        "Mahsulotning qaysi Categoriyaga tegishliligi bo'sh bo'lmasligi kerak"
      ),
    productController.updateProduct
  )
  .delete(productController.deleteProduct);

module.exports = router;
