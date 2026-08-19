import type { Product } from "#/types";
import { useProductSearch } from "#/lib/productSearch";
import ProductCard from "../productCard";
import ProductGridEmpty from "./productGridEmpty";

export default function ProductGrid({ products }: { products: Product[] }) {
  const query = useProductSearch();
  const normalizedQuery = query.trim().toLowerCase();
  const filteredProducts = normalizedQuery
    ? products.filter((product) => product.title.toLowerCase().includes(normalizedQuery))
    : products;

  if (filteredProducts.length === 0) {
    return <ProductGridEmpty isSearchResult={normalizedQuery.length > 0} />;
  }

  return (
    <div className="grid w-full grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
