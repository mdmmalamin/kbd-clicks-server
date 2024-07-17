import { Schema, model } from 'mongoose';
import { TCart } from './cart.interface';

const cartSchema = new Schema<TCart>(
  {
    productId: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },

    orderQty: {
      type: Number,
      required: true,
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export const Cart = model<TCart>('Cart', cartSchema);
