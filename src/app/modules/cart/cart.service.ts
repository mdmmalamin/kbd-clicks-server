import QueryBuilder from '../../builder/QueryBuilder';
import { Product } from '../product/product.model';
import { TCart } from './cart.interface';
import { Cart } from './cart.model';

const createCartIntoDB = async (payload: TCart) => {
  // console.log(payload);
  const result = await Cart.create(payload);
  return result;
};

const getAllCartsFromDB = async (query: Record<string, unknown>) => {
  const cartQuery = new QueryBuilder(
    Cart.find().populate('productId'),
    query,
  ).filter();

  const result = await cartQuery.modelQuery;
  return result;
};

const getOneCartFromDB = async (id: string) => {
  const result = await Cart.findById(id).populate('productId', '_id');
  return result;
};

const updateCartIntoDB = async (id: string, payload: Partial<TCart>) => {
  const result = await Cart.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
    runValidators: true,
  });

  return result;
};

const deleteCartFromDB = async (id: string) => {
  const result = await Cart.findByIdAndDelete(id);
  return result;
};

const placeOrderIntoDB = async () => {
  const allCarts = await Cart.find().populate('productId');

  const placedOrder = allCarts?.map(async (cart: TCart) => {
    const orderDetails = {
      id: cart?.productId?._id,
      productQty: cart.productId.quantity as number,
      qty: cart?.orderQty,
    };

    const stockQty = orderDetails.productQty - orderDetails.qty;

    if (stockQty === 0) {
      await Product.findByIdAndUpdate(
        { _id: orderDetails.id },
        { quantity: stockQty, status: 'out-of-stock' },
        {
          new: true,
          runValidators: true,
        },
      );
    } else {
      await Product.findByIdAndUpdate(
        { _id: orderDetails.id },
        { quantity: stockQty },
        {
          new: true,
          runValidators: true,
        },
      );
    }

    const id = cart?._id;

    const result = await Cart.findByIdAndDelete(id);

    return result;
  });

  return placedOrder;
};

export const CartServices = {
  createCartIntoDB,
  getAllCartsFromDB,
  getOneCartFromDB,
  updateCartIntoDB,
  deleteCartFromDB,
  placeOrderIntoDB,
};
