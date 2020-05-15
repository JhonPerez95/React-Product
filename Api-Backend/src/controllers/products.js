const Product = require('../models/product');
const fs = require('fs');
const path = require('path');

const productCtrl = {};

// POST
productCtrl.saveProduct = async (req, res) => {
  try {
    body = req.body;
    const product = new Product({
      name: body.name,
      size: body.size,
      unitaryPrice: body.unitaryPrice,
      description: body.description,
    });

    if (req.file) {
      const { filename } = req.file;
      product.setImgUrl(filename);
    }

    const productDb = await product.save();
    showRes(productDb, res, 'Saved');
  } catch (err) {
    deleteData(req.file);
    showError(err, res);
  }
};

// GET
productCtrl.findProducts = async (req, res) => {
  try {
    const productsDb = await Product.find();
    showRes(productsDb, res, 'Find all');
  } catch (err) {
    showError(err, res);
  }
};

const showError = (err, res) => {
  res.status(400).json({
    ok: false,
    err: {
      name: err.name,
      message: err.message,
    },
  });
};

const showRes = (resDb, res, string) => {
  res.status(200).json({
    ok: true,
    message: ` ${string} Succefully`,
    resDb,
  });
};

// Fuction for Delete img the Storage
const deleteData = ({ filename }) => {
  let pathImg = path.resolve(__dirname, `../../src/storage/img/${filename}`);
  if (fs.existsSync(pathImg)) {
    fs.unlinkSync(pathImg);
  }
};

module.exports = productCtrl;
