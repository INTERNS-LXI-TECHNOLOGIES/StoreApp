import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  image: any;
  price: number;
  amount: number;
  weight: string;
}
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  item: Product [] = [
    { id: 0, image: 'assets/img.jpg', name: 'chilly powder', price: 8.99, amount: 0 , weight: '100g'},
    { id: 1, image: 'assets/turmeric.jpg', name: 'turmeric powder', price: 5.49, amount: 0 , weight: '100g'},
    { id: 2, image: 'assets/coriander.jpg', name: 'coriander powder', price: 4.99, amount: 0 , weight: '100g'},
    
  ];

  private cart = [];
  private cartItemCount = new BehaviorSubject(0);

  getProduct() {
    return this.item;
  }
  getCart() {
    return this.cart;
  }
  getCartItemCount() {
    return this.cartItemCount;
  }

  addProduct(product) {
    let added = false;
    for (const p of this.cart) {
      if (p.id === product.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      product.amount = 1;
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  decreaseProduct(product) {
    for (const [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.amount -= 1;
        if (p.amount === 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }


  removeProduct(product) {
    for (const [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
      }
    }
  }
}
