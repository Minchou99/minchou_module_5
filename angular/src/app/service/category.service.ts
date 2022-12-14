import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Category} from '../interface/category';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

const API_URL = `${environment.apiURL_category}`;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(API_URL);
  }

  saveCategory(category: Category): Observable<Category> {
    return this.httpClient.post<Category>(API_URL, category);
  }

  findById(id: number): Observable<Category> {
    return this.httpClient.get<Category>(`${API_URL}/${id}`);
  }

  updateCategory(id: number, category: Category): Observable<Category> {
    return this.httpClient.put<Category>(`${API_URL}/${id}`, category);
  }

  deleteCategory(id: number) {
    return this.httpClient.delete<Category>(`${API_URL}/${id}`);
  }

}
