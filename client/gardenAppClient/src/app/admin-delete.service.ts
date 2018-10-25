import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AmdinPageComponent } from './amdin-page/amdin-page.component';

@Injectable({
  providedIn: 'root'
})
export class AdminDeleteService {

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'applicatoin/json'
    })
  } 

  constructor(private http: HttpClient) { }

  deleteProducts(ids) {
    let url = `https://efa-gardenapp-backend.herokuapp.com/api/product/${ids}`
    console.log(`${ids}`)
    return this.http.delete(url, this.httpOptions)
  }

  // testingThis(ids)  {
  //   console.log(`This is another awesome test! ${ids}`)
  // }
}
