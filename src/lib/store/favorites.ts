import type { Product } from "#/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FavoritesStore {
  items: Product[];
  toggleItem: (product: Product) => void;
  clearFavorites: () => void;
}

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set) => ({
      items: [],
      toggleItem: (product) =>
        set((state) => {
          const isFavorite = state.items.some((item) => item.id === product.id);

          return {
            items: isFavorite
              ? state.items.filter((item) => item.id !== product.id)
              : [...state.items, product],
          };
        }),
      clearFavorites: () => set({ items: [] }),
    }),
    {
      name: "shop-demo-favorites",
      partialize: (state) => ({ items: state.items }),
    },
  ),
);
