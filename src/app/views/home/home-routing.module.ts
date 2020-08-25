import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';



const routes:Routes =[

    {
        path: "", component: HomeComponent
    }
];

@NgModule({
    exports:[RouterModule],
    imports:[RouterModule.forChild(routes)]
})

export class HomeRoutingModule{}
    
