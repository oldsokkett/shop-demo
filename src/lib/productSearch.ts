import { createContext, useContext } from "react";

export const ProductSearchContext = createContext("");

export function useProductSearch() {
  return useContext(ProductSearchContext);
}
