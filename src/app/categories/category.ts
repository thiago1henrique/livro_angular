import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Category } from './category.dto';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private  http: HttpClient) {}

  public getAll() {
    return this.http.get<Category[]>(environment.api + 'categories');
  }
}
