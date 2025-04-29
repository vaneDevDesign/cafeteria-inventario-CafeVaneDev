export type Category = "panes" | "postres" | "bebidas";

export interface Product {
  id: string;
  name: string;
  category: Category;
  stock: number;
  minStock: number;
  imageUrl: string;
}
