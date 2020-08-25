import { Component } from "@angular/core";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})

export class FooterComponent{
    public get currentYear():number{
        const year = new Date().getFullYear();
        return year;
    }

}