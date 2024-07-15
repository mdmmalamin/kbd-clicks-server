import { Schema, model } from 'mongoose';
import { TProduct } from './product.interface';

const productSchema = new Schema<TProduct>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: {
        values: ['in-stock', 'out-of-stock', 'discontinued'],
      },
      default: 'in-stock',
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

export const Product = model<TProduct>('Product', productSchema);
