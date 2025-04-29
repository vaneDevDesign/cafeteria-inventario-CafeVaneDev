import { Product } from "../types/product";
import "../../../styles/productCard.css";

type Props = {
  product: Product;
};

function ProductCard({ product }: Props) {
  const isLowStock = product.stock <= product.minStock;
  return (
    <>
      <div className="product-card">
        <img src={product.imageUrl} alt="" className="product-image" />
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <span className="product-category">{product.category}</span>
        </div>
        <div className={`product-stock ${isLowStock ? "low-stock" : ""}`}>
          {isLowStock
            ? `⚠️ Stock bajo: ${product.stock}`
            : `Stock: ${product.stock}`}
        </div>
      </div>
    </>
  );
}

export default ProductCard;
