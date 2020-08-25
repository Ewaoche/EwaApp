import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
      path:'',loadChildren:()=>import('./views/home/home.module')
      .then(module=>module.HomeModule)
    },

    {
      path:'category', loadChildren:()=>import('./views/category/category.module')
      .then(module=>module.CategoryModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
