import { NgModule } from "@angular/core";
import { CategoryRoutingModule} from '../category/category-routing-module';
import { CategoryComponent } from '../category/category.component';
import { CategoryService } from './services/category/category.service';
import { ACategoryService } from './services/category/acategory.service';
import { CommonModule } from '@angular/common';
import { ResourcesComponent } from './components/resources/resources.component';
import { TopicComponent } from './components/topic/topic.component';
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
imports:[CategoryRoutingModule, CommonModule, SharedModule],
providers:[ {provide:ACategoryService, useClass:CategoryService}
],
declarations:[CategoryComponent,ResourcesComponent, TopicComponent]
})

export class CategoryModule{}