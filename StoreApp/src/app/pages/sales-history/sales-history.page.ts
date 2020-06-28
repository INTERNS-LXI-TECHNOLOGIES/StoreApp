import { CustomerDTO } from './../../api/models/customer-dto';
import { ProductDTO } from './../../api/models/product-dto';
import { SaleDTO } from './../../api/models/sale-dto';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SaleResourceService, ProductResourceService, CustomerResourceService } from 'src/app/api/services';

@Component({
  selector: 'app-sales-history',
  templateUrl: './sales-history.page.html',
  styleUrls: ['./sales-history.page.scss'],
})
export class SalesHistoryPage implements OnInit {
 
sales: SaleDTO []=[];
products: ProductDTO[] = [];
customers: CustomerDTO[] = [];
  constructor(private router: Router,
    private saleResourceService: SaleResourceService,
    private productResourceService: ProductResourceService,
    private customerResourceService: CustomerResourceService) { }

  ngOnInit() {
  this.saleResourceService.getAllSalesUsingGET().subscribe(sale=>{
    console.log(sale);
    sale.forEach(sale => {
      this.productResourceService.getProductUsingGET(sale.productId).subscribe(produ => this.products.push(produ));
      this.customerResourceService.getCustomerUsingGET(sale.customerId).subscribe(cust => this.customers.push(cust));
    })
    this.sales=sale;
  });
  
  

  }
  goToHome(){
    this.router.navigateByUrl('admin-layout');
  }



}
