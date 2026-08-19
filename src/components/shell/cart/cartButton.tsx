import { selectCartItemsCount, selectCartTotal, useCartStore } from "#/lib/store/cart";
import { IconShoppingCart, IconTrash } from "@tabler/icons-react";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "../../ui/popover";

export default function CartButton() {
  const items = useCartStore((state) => state.items);
  const itemsCount = useCartStore(selectCartItemsCount);
  const total = useCartStore(selectCartTotal);
  const addItem = useCartStore((state) => state.addItem);
  const decreaseItem = useCartStore((state) => state.decreaseItem);
  const removeItem = useCartStore((state) => state.removeItem);
  const clearCart = useCartStore((state) => state.clearCart);

  return (
    <Popover>
      <PopoverTrigger render={<Button aria-label="Открыть корзину" />}>
        <IconShoppingCart />
        {itemsCount !== 0 && <Badge variant="secondary">{itemsCount}</Badge>}
      </PopoverTrigger>
      <PopoverContent align="end" className="w-96">
        <PopoverHeader className="flex-row items-center justify-between">
          <PopoverTitle>Корзина</PopoverTitle>
          {items.length > 0 && (
            <Button variant="ghost" size="xs" onClick={clearCart}>
              Очистить
            </Button>
          )}
        </PopoverHeader>

        {items.length === 0 ? (
          <p className="py-6 text-center text-muted-foreground">Корзина пуста</p>
        ) : (
          <>
            <ul className="max-h-80 space-y-3 overflow-y-auto">
              {items.map(({ product, quantity }) => (
                <li key={product.id} className="flex items-center gap-3">
                  <img
                    className="size-14 rounded-xl object-cover"
                    src={product.thumbnail}
                    alt={product.title}
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-medium">{product.title}</p>
                    <p className="text-muted-foreground">
                      ${(product.price * quantity).toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button
                      variant="outline"
                      size="icon-xs"
                      aria-label={`Уменьшить количество ${product.title}`}
                      onClick={() => decreaseItem(product.id)}
                    >
                      −
                    </Button>
                    <span className="w-6 text-center">{quantity}</span>
                    <Button
                      variant="outline"
                      size="icon-xs"
                      aria-label={`Увеличить количество ${product.title}`}
                      onClick={() => addItem(product)}
                    >
                      +
                    </Button>
                    <Button
                      variant="destructive"
                      size="icon-xs"
                      aria-label={`Удалить ${product.title} из корзины`}
                      onClick={() => removeItem(product.id)}
                    >
                      <IconTrash />
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between border-t pt-4 font-semibold">
              <span>Итого</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </>
        )}
      </PopoverContent>
    </Popover>
  );
}
