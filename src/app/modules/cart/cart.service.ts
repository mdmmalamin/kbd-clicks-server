import QueryBuilder from '../../builder/QueryBuilder';
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

export const CartServices = {
  createCartIntoDB,
  getAllCartsFromDB,
  getOneCartFromDB,
  updateCartIntoDB,
  deleteCartFromDB,
};
