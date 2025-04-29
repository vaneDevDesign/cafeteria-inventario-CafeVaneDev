import "../styles/CategoryFilter.css";

type Props = {
  activeCategory: string;
  setActiveCategory: (value: string) => void;
};

function CategoryFilter({ activeCategory, setActiveCategory }: Props) {
  const categories = [
    { label: "Todos", value: "all" },
    { label: "🥖 Panes", value: "panes" },
    { label: "🍰 Postres", value: "postres" },
    { label: "🥤 Bebidas", value: "bebidas" },
    { label: "⚠️ Bajo Stock", value: "lowstock" },
  ];

  return (
    <div className="category-filter">
      {categories.map((cat) => (
        <button
          key={cat.value}
          className={`filter-button ${
            activeCategory === cat.value ? "active" : ""
          }`}
          onClick={() => setActiveCategory(cat.value)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
