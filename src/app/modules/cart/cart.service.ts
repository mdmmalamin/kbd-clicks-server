import { TCart } from './cart.interface';
import { Cart } from './cart.model';

const createCartIntoDB = async (payload: TCart) => {
  console.log(payload);
  const result = await Cart.create(payload);
  return result;
};

const getAllCartsFromDB = async () => {
  const result = await Cart.find().populate('productId');
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
  const result = await Cart.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );
  return result;
};

export const CartServices = {
  createCartIntoDB,
  getAllCartsFromDB,
  updateCartIntoDB,
  deleteCartFromDB,
};
