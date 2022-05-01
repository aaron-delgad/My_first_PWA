import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Product } from '../model/product';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  backendPath = environment.backend.path;

  productsUrl = this.backendPath + environment.backend.apis.products;

  constructor(private readonly httpClient: HttpClient) { }

  productsPage(limit: number, offset: number): Observable<Product[]> {
    const _params = new HttpParams().set('limit', limit).set('offset', offset);
    return this.httpClient.get(this.productsUrl, { params: _params })
      .pipe(map(resp => Product.createObjects(resp)));
  }


}
