import { z } from 'zod';

const createProductValidationSchema = z.object({
  body: z.object({
    title: z.string(),
    description: z.string(),
    brand: z.string(),
    quantity: z.number(),
    price: z.number(),
    rating: z.number(),
    status: z.enum(['in-stock', 'out-of-stock', 'discontinued']),

    isDeleted: z.boolean().optional(),
  }),
});

const updateProductValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    brand: z.string().optional(),
    quantity: z.number().optional(),
    price: z.number().optional(),
    rating: z.number().optional(),
    status: z.enum(['in-stock', 'out-of-stock', 'discontinued']).optional(),

    isDeleted: z.boolean().optional(),
  }),
});

export const ProductValidations = {
  createProductValidationSchema,
  updateProductValidationSchema,
};
