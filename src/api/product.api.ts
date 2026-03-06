import { api } from "./axios";
import type { Product } from "../types/product";

export const getProducts = async (): Promise<Product[]> => {
  const { data } = await api.get("/products");
  return data;
};

export const getProductById = async (
  id: string
): Promise<Product> => {
  const { data } = await api.get(`/products/${id}`);
  return data;
};