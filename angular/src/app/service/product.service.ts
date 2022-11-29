import {Injectable} from '@angular/core';
import {Product} from '../interface/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

const API_URL = `${environment.apiURL_product}`;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {
  }

   products: Product[] = [];

  findAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(
      API_URL );
  }

  saveProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(API_URL, product);
  }

  findById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${API_URL}/${id}`);
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.httpClient.put<Product>(`${API_URL}/${id}`, product);
  }

  deleteProduct(id: number) {
    return this.httpClient.delete<Product>(`${API_URL}/${id}`);
  }
}
