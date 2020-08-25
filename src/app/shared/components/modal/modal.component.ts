import {Component} from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})

export class ModalComponent{
    public isHidden:boolean = true;

    public open(): void{
      this.isHidden = false;
    }

    public close():void {
        this.isHidden = true;
    }
}