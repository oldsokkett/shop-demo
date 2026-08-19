import ProductGrid from "#/components/products/grid/productGrid";
import { Button } from "#/components/ui/button";
import { useFavoritesStore } from "#/lib/store/favorites";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/favorites")({
  component: Favorites,
});

function Favorites() {
  const items = useFavoritesStore((state) => state.items);
  const clearFavorites = useFavoritesStore((state) => state.clearFavorites);

  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Избранное</h1>
        {items.length > 0 && (
          <Button variant="ghost" size="sm" onClick={clearFavorites}>
            Очистить
          </Button>
        )}
      </div>
      <ProductGrid products={items} />
    </section>
  );
}
