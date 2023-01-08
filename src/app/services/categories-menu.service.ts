import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoriesMenuModel } from '../models/categories-menu.model';

@Injectable({ providedIn: 'root' })
export class CategoriesMenuService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<CategoriesMenuModel[]> {
    return this._httpClient.get<CategoriesMenuModel[]>('http://fakestoreapi.com/products/categories');
  }
}
