import { Component, ChangeDetectionStrategy, signal, computed, OnDestroy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import type { Product } from './product.model';

@Component({
  selector: 'app-home',
  template: `
    <section aria-labelledby="home-title" class="home-section">
      <h1 id="home-title" class="text-3xl font-bold mb-4">Welcome to THE Shop</h1>

      <p class="text-lg mb-6 text-center max-w-prose">
        Discover our selection of products and add them to your cart. Happy shopping!
      </p>
        <div id=carouselSpace class="relative flex items-center justify-center">
          <button (click)="prev()" aria-label="Previous" class="absolute left-0 carousel-btn prev">‹</button>

          <div class="carousel" aria-roledescription="carousel" aria-live="polite">
            <div class="carousel-frame" role="group" aria-label="Featured product">
            <img
              [ngSrc]="current()?.image ?? ''"
              width="360"
              height="360"
              [attr.alt]="current()?.name ?? ''"
              class="carousel-image"
            />
          </div>

          <div class="carousel-caption">
            <div class="font-semibold">{{ current()?.name }}</div>
            <div class="text-sm text-slate-600">$ {{ current()?.price }}</div>
          </div>
        </div>
        
        <button (click)="next()" aria-label="Next" class="absolute right-0 carousel-btn next">›</button>
      </div>
    </section>
  `,
  imports: [NgOptimizedImage],
  styleUrls: [`./home.component.css`],
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnDestroy {
  // small local product set to reuse in carousel (keeps component focused)
  private readonly products = [
    { id: 1, name: 'The Reddest Mug', price: 12.99, image: '/assets/mug.jpg' },
    { id: 2, name: 'Spell Tome', price: 5.99, image: '/assets/notebook.jpg' },
    { id: 3, name: 'Cool Pencil', price: 3.49, image: '/assets/pencil.jpg' },
  ] as Product[];

  idx = signal(0);
  count = computed(() => this.products.length);
  current = computed(() => this.products[this.idx()]);

  private _interval?: number;

  constructor() {
    // start auto-cycle every 6 seconds
    this._interval = window.setInterval(() => this.next(), 6000);
  }

  ngOnDestroy(): void {
    if (this._interval) {
      clearInterval(this._interval);
    }
  }

  next() {
    this.idx.update((i) => (i + 1) % this.count());
  }

  prev() {
    this.idx.update((i) => (i - 1 + this.count()) % this.count());
  }
}
