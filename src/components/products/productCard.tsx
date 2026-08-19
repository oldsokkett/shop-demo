import type { Product } from "#/types";
import { useCartStore } from "#/lib/store/cart";
import { useFavoritesStore } from "#/lib/store/favorites";
import { Button } from "#/components/ui/button";
import { IconHeart } from "@tabler/icons-react";

export default function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem);
  const isFavorite = useFavoritesStore((state) =>
    state.items.some((item) => item.id === product.id),
  );
  const toggleItem = useFavoritesStore((state) => state.toggleItem);

  return (
    <article className="min-w-0 p-4 hover:shadow-2xl rounded-2xl transition-shadow">
      <img
        className="aspect-square w-full object-cover"
        src={product.images[0]}
        alt={product.title}
      />
      <h2 className="mt-3 truncate font-medium">{product.title}</h2>
      <p className="mt-1 font-semibold">${product.price}</p>
      <div className="flex mt-3">
        <Button className="flex-1" onClick={() => addItem(product)}>
          В корзину
        </Button>
        <Button
          variant="ghost"
          size="icon"
          aria-label={
            isFavorite
              ? `Убрать ${product.title} из избранного`
              : `Добавить ${product.title} в избранное`
          }
          aria-pressed={isFavorite}
          onClick={() => toggleItem(product)}
        >
          <IconHeart fill={isFavorite ? "currentColor" : "none"} />
        </Button>
      </div>
    </article>
  );
}
