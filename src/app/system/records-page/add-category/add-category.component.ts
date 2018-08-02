import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {CategoryService} from "../../../shared/service/category.service";
import {Category} from "../../../shared/entity/category.entity";

@Component({
  selector: 'hf-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  @Output() onAddCategory = new EventEmitter<Category>();

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm){
    let {name, capacity} = form.value;
    if (capacity <0 ) capacity *= -1;;
    const category = new Category(name, capacity);
    console.log(category);
    this.categoryService.addCategory(category)
      .subscribe((category:Category)=>{
      form.reset();
      form.form.patchValue({capacity:1});
      this.onAddCategory.emit(category);
    })
  }
}
