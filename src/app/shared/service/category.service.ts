import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {Category} from "../entity/category.entity";
import {BaseApiServerService} from "../core/baseApiServer.service";

@Injectable()
export class CategoryService extends BaseApiServerService{
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
    return this.put(`categories`, category);
  }
  getCategoryById(id:number):Observable<Category>{
    return this.get(`categories/${id}`);
  }
}
