import { Category } from '../../models/category.model';

export abstract class ACategoryService {
    abstract getCategory(id:string):Promise<Category>;
        
    
}