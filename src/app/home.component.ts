import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section aria-labelledby="home-title">
      <h1 id="home-title" class="text-3xl font-bold mb-4">Welcome to THE Shop</h1>

      <p class="text-lg">
        Discover our selection of products and add them to your cart. Happy shopping!
      </p>
    </section>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
