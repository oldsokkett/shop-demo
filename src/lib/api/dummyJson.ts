import type { ProductResponse } from "#/types";

const BASE_URL = "https://dummyjson.com";

export async function getProducts(): Promise<ProductResponse> {
  const response = await fetch(`${BASE_URL}/products`);

  if (!response.ok) {
    throw new Error(`Ошибка получения товаров: ${response.status} ${response.statusText}`);
  }

  return response.json();
}
