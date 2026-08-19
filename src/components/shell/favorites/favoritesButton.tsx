import { Badge } from "#/components/ui/badge";
import { buttonVariants } from "#/components/ui/button";
import { useFavoritesStore } from "#/lib/store/favorites";
import { IconHeart } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";

export default function FavoritesButton() {
  const itemsCount = useFavoritesStore((state) => state.items.length);

  return (
    <Link
      to="/favorites"
      className={buttonVariants({ size: "default" })}
      aria-label="Открыть избранное"
    >
      <IconHeart />
      {itemsCount !== 0 && <Badge variant="secondary">{itemsCount}</Badge>}
    </Link>
  );
}
