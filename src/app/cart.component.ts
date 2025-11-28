import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CartService } from './cart.service';

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
          <li class="border rounded bg-white p-3 flex items-center justify-between">
            <div>
              <div class="font-semibold">{{ item.name }}</div>
              <div class="text-sm text-slate-500">\${{ item.price }}</div>
            </div>
            <div>
              <button
                type="button"
                class="px-3 py-1 rounded bg-red-600 text-white"
                (click)="remove(item.id)"
                aria-label="Remove {{ item.name }} from cart"
              >
                Remove
              </button>
            </div>
          </li>
        }
      </ul>
      <div class="mt-4">
        <button
          class="px-3 py-1 rounded bg-slate-800 text-white"
          type="button"
          (click)="clear()"
        >
          Clear cart
        </button>
      </div>
    }
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {
  private readonly cartService = inject(CartService);

  // expose readonly cart and helper methods for template
  get cart() {
    return this.cartService.cart;
  }

  remove(id: number) {
    this.cartService.remove(id);
  }

  clear() {
    this.cartService.clear();
  }
}
