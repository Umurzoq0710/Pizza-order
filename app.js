const express = require("express");
// Global Error Handling
const errorController = require("./controllers/errorController");
const AppError = require("./utils/appError");

// Routers
const categoryRouter = require("./routes/categoryRouter");
const productRouter = require("./routes/productRouter");

// Create Express App
const app = express();

// Middillwares
app.use(express.json());

// Routes
app.use("/api/v1/categories", categoryRouter);
app.use("/api/v1/products", productRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Path ${req.path} not exists`, 404));
});

app.use(errorController);

module.exports = app;
