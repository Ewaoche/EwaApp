import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
 
  public isClosed: boolean = true;

  openMenu(): void{
    this.isClosed =false;
  }
  
  closeMenu(): void{
    this.isClosed = true;
  }
}
 