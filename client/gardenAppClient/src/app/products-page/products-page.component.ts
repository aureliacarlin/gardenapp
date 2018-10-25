import { Component, OnInit } from '@angular/core';
import {PageProductService} from '../page-product.service'

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {
// products;
  constructor(private service: PageProductService) { 
    // this.products = service.getProducts()
  }
products;
  ngOnInit() {
    this.service.getProducts().subscribe(data => {
       this.products = data
       console.log(this.products)
       let properties = this.products.id
       console.log(properties)
        this.products.map((properties, id) => {
          console.log(properties)
       })
      // let products = data.forEach(s => {
      //   console.log(s)
      //   console.log(s.id)
      // })

      
      })
  }

}
 