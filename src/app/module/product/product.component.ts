import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/model/product';
import { BusinessService } from 'src/app/shared/service/business.service';

@Component({
  selector: 'pwa-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];

  constructor(private readonly businessService: BusinessService) { }

  ngOnInit(): void {
    this.businessService.productsPage(10,0).subscribe(resp =>{
      this.products = resp;
    })
  }

}
