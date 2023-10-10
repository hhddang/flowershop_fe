import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  categoryList: Category[] = [];
  dropdownMenu: String[] = ['Hot Romance', 'Luna', 'One in a Million'];

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.categoryList = this.categoryService.getAll();
  }
}
