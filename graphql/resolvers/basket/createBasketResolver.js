const { validate } = require('graphql');
const db = require('../../../models');
const { getProductPrice, getProductName, validateQuantity } = require('../../utils');

const createBasketResolver = async (_, basket) => {
    console.log(basket);
    const { id, clientId, products, productsName, productsQuantity, productsPrice, voucher, price } = basket;

    const productTypeCount = products.length;
    console.log('productTypeCount', productTypeCount);

    let total = 0, productPrice = 0;

    // firstly validate the quantity of each product
    for(let i = 0; i<productTypeCount; i++) {
        await validateQuantity(products[i], productsQuantity[i]);
    }

    for(let i = 0; i<productTypeCount; i++) {
        productPrice = await getProductPrice(products[i]);
        total = total + (productsQuantity[i] * productPrice);

        await db.BasketProduct.create({
            basketId: id,
            productId: products[i],
            productName: await getProductName(products[i]),
            quantity: productsQuantity[i],
            price: productPrice
        });
    }

    const newBasket = await db.Basket.create({
        id,
        clientId,
        voucher,
        total
    });

    // dunno why this only works like that
    newBasket.price = total;
    await newBasket.save();

    return newBasket;
};

module.exports = createBasketResolver;