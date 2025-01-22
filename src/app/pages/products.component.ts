import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="space-y-6">
      <div class="flex justify-between items-center">
        <h1 class="text-2xl font-bold">Products</h1>
        <button
          class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Add Product
        </button>
      </div>

      <div class="bg-white shadow-md rounded-lg overflow-hidden">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Product
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Price
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Stock
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            @for (product of products; track $index) {
              <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-medium text-gray-900">
                    {{ product.name }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ product.price }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ product.stock }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    [ngClass]="{
                      'px-2 py-1 text-xs font-semibold rounded-full': true,
                      'bg-green-100 text-green-800':
                        product.status === 'In Stock',
                      'bg-yellow-100 text-yellow-800':
                        product.status === 'Low Stock',
                      'bg-red-100 text-red-800':
                        product.status === 'Out of Stock',
                    }"
                  >
                    {{ product.status }}
                  </span>
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                >
                  <button class="text-indigo-600 hover:text-indigo-900 mr-3">
                    Edit
                  </button>
                  <button class="text-red-600 hover:text-red-900">
                    Delete
                  </button>
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  `,
})
export class ProductsComponent {
  products: Product[] = [
    { id: 1, name: 'Laptop', price: 999.99, stock: 50, status: 'In Stock' },
    { id: 2, name: 'Smartphone', price: 599.99, stock: 5, status: 'Low Stock' },
    {
      id: 3,
      name: 'Headphones',
      price: 99.99,
      stock: 0,
      status: 'Out of Stock',
    },
    { id: 4, name: 'Monitor', price: 299.99, stock: 25, status: 'In Stock' },
    { id: 5, name: 'Keyboard', price: 79.99, stock: 3, status: 'Low Stock' },
  ];
}
