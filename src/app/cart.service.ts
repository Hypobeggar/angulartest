import { Injectable, signal, computed, WritableSignal } from '@angular/core';
import type { Product } from './product.model';

/**
 * Simple application-wide cart service using Angular signals.
 * - providedIn: 'root' so it's a singleton
 * - exposes `cart` signal and helpers to add/remove/clear
 */
@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly _cart: WritableSignal<Product[]> = signal([]);

  readonly cart = this._cart.asReadonly();
  readonly count = computed(() => this._cart().length);

  add(product: Product) {
    this._cart.update(list => [...list, product]);
  }

  remove(id: number) {
    this._cart.update(list => list.filter(p => p.id !== id));
  }

  clear() {
    this._cart.set([]);
  }
}

// A provider is not required because CartService is providedIn: 'root'
