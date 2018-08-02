import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category} from "../../../shared/entity/category.entity";
import {NgForm} from "@angular/forms";
import {CategoryService} from "../../../shared/service/category.service";
import {Message} from "../../../shared/entity/message.entity";

@Component({
  selector: 'hf-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {

  @Input() categories:Category[]=[] ;
  @Output() categoryUpdated = new EventEmitter<Category>();
  currentCategoryID = 1;
  currentCategory:Category;

  message:Message = new Message('success', '');

  constructor(private categoryService:CategoryService) {}

  ngOnInit() {
    this.onCategoryChanged();
  }

  onSubmit(form:NgForm){
    let {name, capacity} = form.value;
    if (capacity <0 ) capacity *= -1;
    const category = new Category(name, capacity, +this.currentCategoryID);
    console.log(category);
    this.categoryService.updateCategory(category)
      .subscribe((category:Category)=>{
        this.categoryUpdated.emit(category);
        this.message.text = 'Категория успешно обновлена';
        window.setTimeout(()=>this.message.text = '', 3000);
      })
  }

  onCategoryChanged(){
    console.log(this.currentCategoryID);
    this.currentCategory = this.categories.find(c=> c.id===+this.currentCategoryID);
  }
}
