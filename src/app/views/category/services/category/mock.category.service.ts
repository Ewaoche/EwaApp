import { ACategoryService } from './acategory.service';
import { Category } from '../../models/category.model';

export class MockCategoryService extends ACategoryService{
    public lastCategoryId:string = '';

    public getCategory(id:string):any{
      this.lastCategoryId =id;

      return new Category({id});
    }
}