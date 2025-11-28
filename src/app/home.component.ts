import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section aria-labelledby="home-title">
      <h1 id="home-title" class="text-3xl font-bold mb-4">Welcome to Mini Shop</h1>

      <p class="text-lg">
        This is a simple demonstration shop built with Angular, Signals,
        and TailwindCSS following strict best practices.
      </p>
    </section>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
