import { Component} from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { ACategoryService } from './services/category/acategory.service';
import { Category } from './models/category.model';




@Component({
 selector: 'app-category',
 templateUrl:'./category.component.html',
 styleUrls: ['./category.component.scss']
})

export class CategoryComponent{

    public category = new Category();
    constructor(private route: ActivatedRoute, 
        private categoryservice:ACategoryService,
        ){
        
    }

    public ngOnInit():void{
      this.updateCategoryData();
    }

   

    private  updateCategoryData():void{
        this.route.params.subscribe(async (params)=>{
            const { id } = params; 
            this.category = await this.categoryservice.getCategory(id);
            // console.log(this.category);
        });
    }
}