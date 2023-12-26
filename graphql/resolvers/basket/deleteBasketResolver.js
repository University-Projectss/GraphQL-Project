const db = require('../../../models');
const { checkValidUser } = require('../../utils');

const deleteBasketResolver = async (_, args, context) => {
    const bigUser = context.req.raw.user;
    const { basketId } = args;
    
    checkValidUser(bigUser);

    const deletedBasket = await db.Basket.findByPk(basketId);
    if (!deletedBasket) {
        throw new Error('Error deleting basket');
    }

    try {
        await deletedBasket.destroy();
        return true;
    } catch (e) {
        throw new Error(e);
    }

}

module.exports = deleteBasketResolver;