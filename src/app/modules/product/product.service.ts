import QueryBuilder from '../../builder/QueryBuilder';
import { ProductSearchableFields } from './product.constant';
import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProductIntoDB = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

const getAllProductsFromDB = async (query: Record<string, unknown>) => {
  const productQuery = new QueryBuilder(
    Product.find(),
    // .populate('preRequisiteCourses.course'),
    query,
  )
    .search(ProductSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await productQuery.modelQuery;
  return result;
};

const getOneProductFromDB = async (id: string) => {
  const result = await Product.findById(id);
  // .populate('preRequisiteCourses.course');
  return result;
};

const updateProductIntoDB = async (id: string, payload: Partial<TProduct>) => {
  console.log(id, payload);
};

const deleteProductFromDB = async (id: string) => {
  const result = await Product.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getOneProductFromDB,
  updateProductIntoDB,
  deleteProductFromDB,
};
