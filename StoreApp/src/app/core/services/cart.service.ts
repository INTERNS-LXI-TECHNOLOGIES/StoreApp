import { CartDTO } from './../../api/models/cart-dto';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SaleDTO, ProductDTO } from 'src/app/api/models';

export interface Product {
  id?: number;
  name?: string;
  image?: any;
  price?: number;
  amount?: number;
  weight?: string;
}
@Injectable({
  providedIn: 'root',
})
export class CartService {

  customerId;
  cartDTO: CartDTO[] = [];

  productsMap = new Map<number, ProductDTO>();

  private cartItemCount = new BehaviorSubject(0);

  constructor() {
    if (this.customerId === undefined) {
      this.getCustomerId();
    }
  }


  getProduct() {
    return this.cartDTO;
  }
  getCart() {
    return this.cartDTO;
  }
  getCartItemCount() {
    return this.cartItemCount;
  }

  // addProduct(product) {
  //   let added = false;
  //   for (const p of this.cart) {
  //     if (p.id === product.id) {
  //       p.amount += 1;
  //       added = true;
  //       break;
  //     }
  //   }
  //   if (!added) {
  //     product.amount = 1;
  //     this.cart.push(product);
  //   }
  //   this.cartItemCount.next(this.cartItemCount.value + 1);
  // }

  addProduct(product: ProductDTO) {
    this.productsMap.set(product.id , product);
    let alreadyExist = false;
    let tempCartDto: CartDTO;

    for (const CartDto of this.cartDTO) {
      if (CartDto.productId === product.id) {
        alreadyExist = true;
        tempCartDto = CartDto;
      }
    }
    if (alreadyExist) {
      tempCartDto.noOfProduct++;
      tempCartDto.amount = product.price * tempCartDto.noOfProduct;
    } else {
      const cartDto: CartDTO = {
        productId: product.id,
        amount: product.price,
        noOfProduct: 1,
        customerId: this.customerId,
      };
      this.cartDTO.push(cartDto);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }
  getCustomerId() {
    this.customerId = localStorage.getItem('userId');
    return this.customerId;
  }

  decreaseProduct(product) {
    for (const [index, cartDto] of this.cartDTO.entries()) {
      if (cartDto.productId === product.id) {
        cartDto.noOfProduct -= 1;
        cartDto.amount = this.productsMap.get(cartDto.productId).price * cartDto.noOfProduct;
        if (cartDto.noOfProduct === 0) {
          this.cartDTO.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }

  removeProduct(product) {
    for (const [index, cartDto] of this.cartDTO.entries()) {
      if (cartDto.productId === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - cartDto.noOfProduct);
        this.cartDTO.splice(index, 1);
      }
    }
  }
  clearProducts() {
    this.cartDTO = [];
    this.cartItemCount.next(0);
  }
}
