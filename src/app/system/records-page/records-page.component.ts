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
  currentCategory:Category;

  constructor(private categoryService:CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(categories=>{
      this.categories = categories;
      this.isLoaded = true;
      this.currentCategory = this.categories[0];
    });
  }

  onAddCategory(category:Category){
    this.categories.push(category);
    this.currentCategory = this.categories[0];
  }
  onCategoryUpdated(category:Category){
   const idx = this.categories.findIndex(c=> c.id === category.id);
   this.categories[idx] = category;
  }
  onCategoryDeleted(category:Category){
    this.categoryService.deleteById(category.id).subscribe(()=>{
      this.categories = this.categories.filter(c=>c.id != category.id);
      this.currentCategory = this.categories[0];
    })
  }
  onCategoryChanged(category:Category){
    this.currentCategory = category;
  }

}
