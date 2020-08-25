import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import {filter } from 'rxjs/operators';
import { FormattedTitles} from './models/data/formatted-titles';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router:Router, private titleService:Title){

  }

  public ngOnInit(): void{
  this.router.events.pipe(filter((event:any) => event instanceof NavigationEnd))
  .subscribe((navigationEnd:NavigationEnd)=>{
    this.updateTitle(navigationEnd);
  })

  }

  private updateTitle(navigationEnd:NavigationEnd): void{
    const urlPieces: string[] = navigationEnd.url.split('/').filter((piece)=>piece.length > 0);
    console.log(urlPieces)

    switch(urlPieces.length){
     case 2:
       this.setSubcategoryTitle(urlPieces);
     break;

     default:
      this.titleService.setTitle('Video Dev Docs | Ewaoche');

     
    }
    
  }
 
  private setSubcategoryTitle(urlPieces:string[]):void {
    const actualCategory = urlPieces[1];
    let title = `${actualCategory.toUpperCase()} | Ewaoche`;

    if(actualCategory === 'javascript'){
     
      title = `${FormattedTitles[actualCategory]} | Ewaoche`;

    }
   
    this.titleService.setTitle(title);
   
  }
}
