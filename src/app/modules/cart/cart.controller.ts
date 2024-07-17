import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { CartServices } from './cart.service';

const createCart = catchAsync(async (req, res) => {
  const result = await CartServices.createCartIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cart is created successfully!',
    data: result,
  });
});

const getAllCart = catchAsync(async (req, res) => {
  const result = await CartServices.getAllCartsFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cart are retrieved successfully!',
    data: result,
  });
});

const getOneCart = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CartServices.getOneCartFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cart is retrieved successfully!',
    data: result,
  });
});

const updateCart = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CartServices.updateCartIntoDB(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cart is updated successfully!',
    data: result,
  });
});

const deleteCart = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CartServices.deleteCartFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cart is deleted successfully!',
    data: result,
  });
});

export const CartControllers = {
  createCart,
  getAllCart,
  getOneCart,
  updateCart,
  deleteCart,
};
