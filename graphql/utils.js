const db = require("../models");

const checkValidUser = (user) => {
  if (user === null) {
    throw new Error("Unauthorized");
  }
};

const getProduct = async (productId) => {
  const product = await db.Product.findOne({
    where: {
      id: productId,
    },
  });
  if (!product) {
    throw new Error("Product not found");
  }
  return product;
};

const getProductPrice = async (productId) => {
  const product = await getProduct(productId);
  return product.price;
}

const getProductName = async (productId) => {
  const product = await getProduct(productId);
  return product.name;
}

const getProductQuantity = async (productId) => {
  const product = await getProduct(productId);
  return product.quantity;
}

const getProductDescription = async (productId) => {
  const product = await getProduct(productId);
  return product.description;
}

const validateQuantity = async (productId, wantedQuantity) => {
  const productQuantity = await getProductQuantity(productId);
  if (productQuantity < wantedQuantity) {
    throw new Error(`Not enough products on our stock for ${await getProductName(productId)}`);
  }
}

module.exports = { checkValidUser, getProductPrice, getProductName, validateQuantity, getProductDescription };
