import { Types } from 'mongoose';

export type TCheckout = {
  productId: Types.ObjectId;
  orderQty: number;
  isDeleted: boolean;
};
