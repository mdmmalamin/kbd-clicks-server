export type TProduct = {
  title: string;
  description: string;
  brand: string;
  quantity: number;
  price: number;
  rating: number;
  status: 'in-stock' | 'out-of-stock' | 'discontinued';
  img: string;
  isDeleted: boolean;
};
