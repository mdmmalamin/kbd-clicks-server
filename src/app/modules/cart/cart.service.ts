import { TCart } from './cart.interface';
import { Cart } from './cart.model';

const createCartIntoDB = async (payload: TCart) => {
  const result = await Cart.create(payload);
  return result;
};

const updateCartIntoDB = async (id: string, payload: Partial<TCart>) => {
  const result = await Cart.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteCartFromDB = async (id: string) => {
  const result = await Cart.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );
  return result;
};

export const CartServices = {
  createCartIntoDB,
  updateCartIntoDB,
  deleteCartFromDB,
};
