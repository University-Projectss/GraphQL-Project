const db = require('../../../models');

const createBasketResolver = async (_, basket) => {
    console.log(basket);
    const { id, clientId, products, productsName, productsQuantity, productsPrice, voucher, price } = basket;

    const productTypeCount = products.length;
    console.log('productTypeCount', productTypeCount);
    for(let i = 0; i<productTypeCount; i++) {
        console.log('i', i, 'products[i]', products[i], 'productsQuantity[i]', productsQuantity[i], 'productsPrice[i]', productsPrice[i])
        await db.BasketProduct.create({
            orderId: id,
            productId: products[i],
            productName: productsName[i],
            quantity: productsQuantity[i],
            price: productsPrice[i]
        });
    }

    const newBasket = await db.Basket.create({
        id,
        clientId,
        voucher,
        price
    });

    return newBasket;
};

module.exports = createBasketResolver;