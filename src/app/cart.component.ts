import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

interface CartItem {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-cart',
  template: `
    <h1 class="text-2xl font-semibold mb-6">Your Cart</h1>

    @if (cart().length === 0) {
      <p>Your cart is empty.</p>
    } @else {
      <ul class="space-y-3">
        @for (item of cart(); track item.id) {
          <li class="border rounded bg-white p-3">
            {{ item.name }} — \${{ item.price }}
          </li>
        }
      </ul>
    }
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {
  cart = signal<CartItem[]>([]);
}
