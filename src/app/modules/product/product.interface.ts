export type TProduct = {
  id: string;
  title: string;
  description: string;
  brand: string;
  quantity: number;
  price: number;
  rating: number;
  status: 'in-stock' | 'out-of-stock' | 'discontinued';
  isDeleted: boolean;
};
