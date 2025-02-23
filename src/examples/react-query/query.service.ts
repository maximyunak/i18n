import axios from 'axios';

class ProductService {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  // Получить все продукты
  async getProducts() {
    return axios.get(`${this.baseUrl}/product`);
  }

  // Получить продукт по ID
  async getProductById(id: string) {
    return axios.get(`${this.baseUrl}/product/${id}`);
  }

  // Создать новый продукт
  async createProduct(productData: { title: string; price: number }) {
    return axios.post(`${this.baseUrl}/product`, productData);
  }

  // Обновить продукт по ID
  async updateProduct(
    id: string,
    productData: { title?: string; price?: number },
  ) {
    return axios.put(`${this.baseUrl}/product/${id}`, productData);
  }

  // Удалить продукт по ID
  async deleteProduct(id: string) {
    return axios.delete(`${this.baseUrl}/product/${id}`);
  }
}

// Экспортируем экземпляр сервиса
export default new ProductService(
  'https://6756d62cc0a427baf94a9a69.mockapi.io',
);
