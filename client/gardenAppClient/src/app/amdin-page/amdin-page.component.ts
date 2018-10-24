import { Component, OnInit } from '@angular/core';
import {PageProductService} from '../page-product.service'

@Component({
  selector: 'app-amdin-page',
  templateUrl: './amdin-page.component.html',
  styleUrls: ['./amdin-page.component.css']
})
export class AmdinPageComponent implements OnInit {
// products;
  constructor(private service: PageProductService) { 
    // this.products = service.getProducts()
  }
properties;
  ngOnInit() {
    this.service.getProducts().subscribe(data => {
       this.properties = data
       console.log(this.properties)
      //  let properties = this.products.id
      //  console.log(properties)
      //   this.products.map((properties, id) => {
      //     console.log(properties)
      //  })
      // let products = data.forEach(s => {
      //   console.log(s)
      //   console.log(s.id)
      // })

      
      })
  }

}



