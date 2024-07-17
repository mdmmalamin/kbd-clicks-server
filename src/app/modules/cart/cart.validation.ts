import { z } from 'zod';

const createCartValidationSchema = z.object({
  body: z.object({
    productId: z.string(),
    orderQty: z.number(),

    isDeleted: z.boolean().optional(),
  }),
});

const updateCartValidationSchema = z.object({
  body: z.object({
    // productId: z.string(),
    orderQty: z.number(),

    isDeleted: z.boolean().optional(),
  }),
});

export const CartValidations = {
  createCartValidationSchema,
  updateCartValidationSchema,
};
