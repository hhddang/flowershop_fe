import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from 'src/app/models/category';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private httpClient: HttpClient) {}

  public getAll(): Category[] {
    return [
      { id: 1, name: 'love' },
      { id: 2, name: 'birthday' },
      { id: 3, name: 'anniversary' },
      { id: 4, name: 'funeral' },
    ];
  }
}
