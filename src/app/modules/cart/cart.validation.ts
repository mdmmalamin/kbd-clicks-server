import { z } from 'zod';

const createCartValidationSchema = z.object({
  body: z.object({
    productId: z.string(),
    quantity: z.number(),

    isDeleted: z.boolean().optional(),
  }),
});

const updateCartValidationSchema = z.object({
  body: z.object({
    productId: z.string(),
    quantity: z.number().optional(),

    isDeleted: z.boolean().optional(),
  }),
});

export const CartValidations = {
  createCartValidationSchema,
  updateCartValidationSchema,
};
