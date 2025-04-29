import ProductCard from "../features/products/components/ProductCard";
import { Product } from "../features/products/types/product";
import "../styles/ProductList.css";

type Props = {
  products: Product[];
};

function ProductList({ products }: Props) {
  return (
    <section className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}

export default ProductList;
