import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
} from '@angular/core';
import { ProductCardComponent } from './product-card.component';
import { Product } from './product.model';

@Component({
  selector: 'app-products',
  template: `
    <h1 class="text-2xl font-semibold mb-6">Products</h1>

    <section
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      aria-label="Product list"
    >
      @for (p of products(); track p.id) {
        <app-product-card
          [product]="p"
          (add)="addToCart($event)"
        />
      }
    </section>

    <p class="mt-6 text-slate-600">Items in cart: {{ cartCount() }}</p>
  `,
  imports: [ProductCardComponent],
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent {
  products = signal<Product[]>([
    { id: 1, name: 'Red Mug', price: 12.99, image: '/assets/mug.jpg' },
    { id: 2, name: 'Notebook', price: 5.99, image: '/assets/notebook.jpg' },
    { id: 3, name: 'Pencil Set', price: 3.49, image: '/assets/pencils.jpg' },
  ]);

  cart = signal<Product[]>([]);
  cartCount = computed(() => this.cart().length);

  addToCart(product: Product) {
    this.cart.update((list) => [...list, product]);
  }
}
