import { Link } from "@tanstack/react-router";
import { Input } from "#/components/ui/input";
import CartButton from "./cart/cartButton";
import FavoritesButton from "./favorites/favoritesButton";

interface HeaderProps {
  query: string;
  onQueryChange: (query: string) => void;
}

export default function Header({ query, onQueryChange }: HeaderProps) {
  return (
    <header className="sticky top-4 mt-4 grid grid-cols-[1fr_auto] items-center gap-3 rounded-2xl border p-4 backdrop-blur sm:grid-cols-[1fr_minmax(16rem,32rem)_1fr]">
      <Link to="/" className="justify-self-start font-mono text-2xl font-black">
        Барахолка
      </Link>

      <Input
        type="search"
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        aria-label="Поиск товаров по названию"
        placeholder="Поиск по названию"
        className="order-3 col-span-2 sm:order-none sm:col-span-1"
      />

      <div className="flex justify-self-end gap-2">
        <FavoritesButton />
        <CartButton />
      </div>
    </header>
  );
}
