import { TestBed } from '@angular/core/testing';
import { ProductsComponent } from './products.component';
import { ProductCardComponent } from './product-card.component';
import { CartService } from './cart.service';

describe('ProductsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsComponent, ProductCardComponent],
    }).compileComponents();
  });

  it('adds product to cart via CartService', () => {
    const fixture = TestBed.createComponent(ProductsComponent);
    const comp = fixture.componentInstance;
    const cartService = TestBed.inject(CartService);

    // initial cart is empty
    expect(cartService.count()).toBe(0);

    const product = { id: 999, name: 'Test', price: 1.23, image: '' };
    comp.addToCart(product);

    expect(cartService.count()).toBe(1);
    expect(cartService.cart()[0].id).toBe(999);
  });
});
