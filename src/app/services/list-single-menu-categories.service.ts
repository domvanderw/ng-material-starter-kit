import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListSingleMenuCategoriesModel } from '../models/list-single-menu-categories.model';

@Injectable({ providedIn: 'root' })
export class ListSingleMenuCategoriesService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<ListSingleMenuCategoriesModel[]> {
    return this._httpClient.get<ListSingleMenuCategoriesModel[]>('http://fakestoreapi.com/products/categories');
  }
}
