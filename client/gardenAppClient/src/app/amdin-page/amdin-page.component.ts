import { Component, OnInit } from '@angular/core';
import {PageProductService} from '../page-product.service'
import { AdminDeleteService } from '../admin-delete.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-amdin-page',
  templateUrl: './amdin-page.component.html',
  styleUrls: ['./amdin-page.component.css']
})
export class AmdinPageComponent implements OnInit {
// products;
  constructor(
    private service: PageProductService,
    private adminDelete: AdminDeleteService,
    private route: ActivatedRoute
  ) { 
    // this.products = service.getProducts()
  }
  test = 'Thiis is a test';
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
          testDelete(id) {
           this.adminDelete.deleteProducts(id).subscribe();
            // console.log(id)
          } 

} 



