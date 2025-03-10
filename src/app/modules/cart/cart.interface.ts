import { Types } from 'mongoose';

export type TCart = {
  productId: Types.ObjectId;
  orderQty: number;
  isDeleted: boolean;
};
