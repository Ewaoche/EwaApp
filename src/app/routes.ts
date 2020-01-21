import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';

export const appRoutes:Routes =[
  {path:'', loadChildren: ()=>import('./views/home/home.module').then(module=>module.HomeModule)}
  
];


