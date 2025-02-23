// hooks/useProducts.ts
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import productService from './query.service';

// Хук для получения всех продуктов
export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: () => productService.getProducts().then((res) => res.data),
    staleTime: 5 * 60 * 1000, // данные считаются свежими 5 минут
  });
};

// Хук для получения продукта по ID
export const useProductById = (id: string) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => productService.getProductById(id).then((res) => res.data),
    enabled: !!id, // Запрос выполняется только если передан ID
  });
};

// Хук для создания продукта
export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (productData: { title: string; price: number }) =>
      productService.createProduct(productData).then((res) => res.data),
    onSuccess: () => {
      // Инвалидируем кэш, чтобы обновить список продуктов
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });
};

// Хук для обновления продукта
export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      productData,
    }: {
      id: string;
      productData: { title?: string; price?: number };
    }) => productService.updateProduct(id, productData).then((res) => res.data),
    onSuccess: (_, variables) => {
      // Инвалидируем кэш для обновления данных продукта
      queryClient.invalidateQueries({ queryKey: ['product', variables.id] });
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });
};

// Хук для удаления продукта
export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) =>
      productService.deleteProduct(id).then((res) => res.data),
    onSuccess: () => {
      // Инвалидируем кэш, чтобы обновить список продуктов
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });
};
