'use client';

import { useState } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Input,
  Spinner,
} from '@heroui/react';

import {
  useCreateProduct,
  useDeleteProduct,
  useProducts,
  useUpdateProduct,
} from './queries';

interface Product {
  id: string;
  title: string;
  price: number;
}

export const ProductList = () => {
  const [newProduct, setNewProduct] = useState({ title: '', price: 0 });
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const { data: products, isLoading, error } = useProducts();
  const createProduct = useCreateProduct();
  const updateProduct = useUpdateProduct();
  const deleteProduct = useDeleteProduct();

  if (isLoading) return <Spinner size="lg" />;
  if (error) return <div className="text-red-500">Ошибка: {error.message}</div>;

  const handleCreateProduct = (e: React.FormEvent) => {
    e.preventDefault();
    createProduct.mutate(newProduct, {
      onSuccess: () => {
        setNewProduct({ title: '', price: 0 });
      },
    });
  };

  const handleUpdateProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProduct) return;

    updateProduct.mutate(
      {
        id: editingProduct.id,
        productData: {
          title: editingProduct.title,
          price: editingProduct.price,
        },
      },
      {
        onSuccess: () => {
          setEditingProduct(null);
        },
      },
    );
  };

  const handleDeleteProduct = (id: string) => {
    deleteProduct.mutate(id);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 text-black">
      <Card className="mb-6">
        <CardHeader>
          <h2 className="text-2xl font-bold">Список продуктов</h2>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleCreateProduct}>
            <div className="flex gap-4">
              <Input
                type="text"
                value={newProduct.title}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, title: e.target.value })
                }
                placeholder="Название продукта"
                className="flex-1"
              />
              <Input
                type="number"
                value={newProduct.price.toString()}
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    price: Number(e.target.value),
                  })
                }
                placeholder="Цена"
                className="w-32"
              />
              <Button
                color="primary"
                type="submit"
                isLoading={createProduct.isPending}
              >
                Создать
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>

      <div className="space-y-4 ">
        {products?.map((product: Product) => (
          <Card key={product.id} className="mb-4">
            <CardBody>
              {editingProduct?.id === product.id ? (
                <form onSubmit={handleUpdateProduct} className="flex gap-4">
                  <Input
                    type="text"
                    value={editingProduct.title}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        title: e.target.value,
                      })
                    }
                    className="flex-1"
                  />
                  <Input
                    type="number"
                    value={editingProduct.price.toString()}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        price: Number(e.target.value),
                      })
                    }
                    className="w-32"
                  />
                  <Button
                    color="success"
                    type="submit"
                    isLoading={updateProduct.isPending}
                  >
                    Сохранить
                  </Button>
                  <Button
                    // color="neutral"
                    variant="light"
                    onClick={() => setEditingProduct(null)}
                  >
                    Отмена
                  </Button>
                </form>
              ) : (
                <div className="flex items-center justify-between mt-2 px-3">
                  <div className="mt-3">
                    <h3 className="text-lg font-semibold text-black">
                      {product.title}
                    </h3>
                    <p className="text-black">{product.price} ₽</p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      color="warning"
                      variant="light"
                      onClick={() => setEditingProduct(product)}
                    >
                      Редактировать
                    </Button>
                    <Button
                      color="danger"
                      variant="light"
                      onClick={() => handleDeleteProduct(product.id)}
                      isLoading={deleteProduct.isPending}
                    >
                      Удалить
                    </Button>
                  </div>
                </div>
              )}
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};
