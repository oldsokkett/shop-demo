import type { Product } from "#/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (product: Product) => void;
  decreaseItem: (productId: number) => void;
  removeItem: (productId: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      addItem: (product) =>
        set((state) => {
          const item = state.items.find((item) => item.product.id === product.id);

          if (!item) {
            return { items: [...state.items, { product, quantity: 1 }] };
          }

          return {
            items: state.items.map((item) =>
              item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
            ),
          };
        }),
      decreaseItem: (productId) =>
        set((state) => ({
          items: state.items.flatMap((item) => {
            if (item.product.id !== productId) return [item];
            if (item.quantity === 1) return [];

            return [{ ...item, quantity: item.quantity - 1 }];
          }),
        })),
      removeItem: (productId) =>
        set((state) => ({
          items: state.items.filter((item) => item.product.id !== productId),
        })),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: "shop-demo-cart",
      partialize: (state) => ({ items: state.items }),
    },
  ),
);

export const selectCartItemsCount = (state: CartStore) =>
  state.items.reduce((count, item) => count + item.quantity, 0);

export const selectCartTotal = (state: CartStore) =>
  state.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
