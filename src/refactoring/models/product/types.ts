export interface Discount {
  quantity: number;
  rate: number;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
  discounts: Discount[];
}
