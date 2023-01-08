import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListNamesModel } from '../models/list-names.model';

@Injectable({ providedIn: 'root' })
export class ListNamesService {
  getAll(): Observable<ListNamesModel[]> {
    return this.getAll();
  }
}
