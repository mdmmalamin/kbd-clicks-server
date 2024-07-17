import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CartValidations } from './cart.validation';
import { CartControllers } from './cart.controller';

const router = express.Router();

router.post(
  '/add-to-cart',
  validateRequest(CartValidations.createCartValidationSchema),
  CartControllers.createCart,
);

router.get('/', CartControllers.getAllCart);

router.patch(
  '/:id',
  validateRequest(CartValidations.updateCartValidationSchema),
  CartControllers.updateCart,
);

router.delete('/:id', CartControllers.deleteCart);

export const CartRoutes = router;
