import { Injectable } from "@angular/core";
import { ACategoryService } from './acategory.service';
import { Category } from '../../models/category.model';
import { JAVASCRIPT_DATA } from '../../models/data/javascript';
import { Categories } from '../../models/enums/categories.enum';



@Injectable()

export class CategoryService extends ACategoryService{
 public async getCategory(id:string): Promise<Category>{
     switch(id){
         case Categories.JavaScript:
             return JAVASCRIPT_DATA
     }
     return;
 }
}