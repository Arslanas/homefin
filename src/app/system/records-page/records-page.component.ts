import {Component, Input, OnInit} from '@angular/core';
import {Category} from "../../shared/entity/category.entity";
import {CategoryService} from "../../shared/service/category.service";

@Component({
  selector: 'hf-records-page',
  templateUrl: './records-page.component.html',
  styleUrls: ['./records-page.component.scss']
})
export class RecordsPageComponent implements OnInit {

  categories:Category[] = [];
  isLoaded = false;

  constructor(private categoryService:CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(categories=>{
      this.categories = categories;
      this.isLoaded = true;
    });
  }

  onAddCategory(category:Category){
    this.categories.push(category);
  }
  onCategoryUpdated(category:Category){
   const idx = this.categories.findIndex(c=> c.id === category.id);
   this.categories[idx] = category;
  }
}
