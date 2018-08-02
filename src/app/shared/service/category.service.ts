import {BaseApiService} from "../core/baseApi.service";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {Category} from "../entity/category.entity";

@Injectable()
export class CategoryService extends BaseApiService{
  constructor(public http:HttpClient){
    super(http);
  }

  addCategory(category: Category):Observable<Category>{
    return this.post('categories', category);
  }
  getCategories():Observable<Category[]>{
    return this.get('categories');
  }
  updateCategory(category: Category):Observable<Category>{
    return this.put(`categories/${category.id}`, category);
  }
}
