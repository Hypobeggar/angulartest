// app.ts
import { Component, signal, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgOptimizedImage],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly title = signal('angulartest');
  private readonly cartService = inject(CartService);

  get cartCount() {
    return this.cartService.count;
  }
}
