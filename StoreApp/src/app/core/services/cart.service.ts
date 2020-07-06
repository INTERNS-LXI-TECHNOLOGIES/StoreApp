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
  item: SaleDTO[] = [];

  productsMap = new Map<number, ProductDTO>();

  private cart = [];
  private cartItemCount = new BehaviorSubject(0);

  constructor() {
    if (this.customerId === undefined) {
      this.getCustomerId();
    }
  }


  getProduct() {
    return this.item;
  }
  getCart() {
    return this.item;
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
    let tempSaleDto: SaleDTO;

    for (const saleDto of this.item) {
      if (saleDto.productId === product.id) {
        alreadyExist = true;
        tempSaleDto = saleDto;
      }
    }
    if (alreadyExist) {
      tempSaleDto.noOfProduct++;
      tempSaleDto.amount = product.price * tempSaleDto.noOfProduct;
    } else {
      const salesDto: SaleDTO = {
        productId: product.id,
        date: new Date().toISOString(),
        amount: product.price,
        noOfProduct: 1,
        customerId: this.customerId,
      };
      this.item.push(salesDto);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }
  getCustomerId() {
    this.customerId = localStorage.getItem('userId');
    return this.customerId;
  }

  decreaseProduct(product) {
    for (const [index, salesDto] of this.item.entries()) {
      if (salesDto.productId === product.id) {
        salesDto.noOfProduct -= 1;
        salesDto.amount = this.productsMap.get(salesDto.productId).price * salesDto.noOfProduct;
        if (salesDto.noOfProduct === 0) {
          this.item.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }

  removeProduct(product) {
    for (const [index, salesDto] of this.item.entries()) {
      if (salesDto.productId === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - salesDto.noOfProduct);
        this.item.splice(index, 1);
      }
    }
  }
  clearProducts() {
    this.item = [];
    this.cartItemCount.next(0);
  }
}
