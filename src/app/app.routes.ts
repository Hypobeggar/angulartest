import { Routes } from '@angular/router';

export const routes: Routes = [
	{ path: '', loadComponent: () => import('./home.component').then(m => m.HomeComponent) },
	{ path: 'products', loadComponent: () => import('./products.component').then(m => m.ProductsComponent) },
	{ path: 'cart', loadComponent: () => import('./cart.component').then(m => m.CartComponent) },
	{ path: '**', redirectTo: '' },
];
