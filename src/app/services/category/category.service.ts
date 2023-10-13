import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(
      `${environment.backendUrl}/api/categories`
    );
  }
}
