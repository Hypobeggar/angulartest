import {
  Component,
  ChangeDetectionStrategy,
  input,
  output,
} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import type { Product } from './product.model';

@Component({
  selector: 'app-product-card',
  template: `
    <article
      class="border rounded-lg bg-white p-4 shadow-sm flex flex-col"
      aria-label="Product card"
    >
      <img
        [ngSrc]="product()?.image ?? ''"
        width="300"
        height="300"
        [attr.alt]="product()?.name ?? ''"
        class="mb-4 rounded"
      />

      <h2 class="text-lg font-semibold">{{ product()?.name }}</h2>
      <p class="text-slate-700 mb-4">$ {{ product()?.price }}</p>

      <button
        type="button"
        (click)="onAdd()"
        class="mt-auto px-4 py-2 rounded bg-indigo-600 text-white focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600"
      >
        Add to Cart
      </button>
    </article>
  `,
  imports: [NgOptimizedImage],
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  product = input<Product | undefined>();
  add = output<Product>();

  onAdd() {
    const p = this.product();
    if (p) this.add.emit(p);
  }
}
