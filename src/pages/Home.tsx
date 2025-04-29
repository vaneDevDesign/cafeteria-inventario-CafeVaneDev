import { useState, useEffect, useMemo } from "react";
import Header from "../components/Header";
import CategoryFilter from "../components/CategoryFilter";
import ProductList from "../components/ProductList";
import { productsMock } from "../data/products";
import { Product } from "../features/products/types/product";
import "../styles/Home.css";

function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  useEffect(() => {
    setProducts(productsMock);
  }, []);

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter((product) => {
        if (activeCategory === "all") return true;
        if (activeCategory === "lowstock")
          return product.stock <= product.minStock;
        return product.category === activeCategory;
      });
  }, [products, searchTerm, activeCategory]);

  return (
    <div className="home-container">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CategoryFilter
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default Home;
