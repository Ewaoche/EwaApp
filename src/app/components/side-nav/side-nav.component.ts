import { Component } from "@angular/core";


@Component({

    selector: "app-side-nav",
    templateUrl: "./side-nav.component.html",
    styleUrls: ["./side-nav.component.scss"]
})

export class SideNavComponent{
    public isclosed:boolean = true;

    public openMenu():void {
      
        this.isclosed =false;
        
    }

    public closeMenu():void{
      this.isclosed = true;
    }
}


