import {NgModule} from '@angular/core';
import { ModalComponent } from './components/modal/modal.component';
import { CardComponent } from './components/card/card.component';
import { BookComponent } from './components/book/book.component';
import { CommonModule } from '@angular/common';
import { StarListComponent} from './components/star-list/star-list.component';
import { AlertComponent } from '../components/alert/alert.component';
import { ALocalStorage } from './services/local-storage/alocal.storage.model';
import { LocalStorage } from './services/local-storage/localstorage.service';


@NgModule({

    declarations:[ModalComponent, 
        CardComponent, 
        BookComponent, 
        StarListComponent,
        AlertComponent],
    exports:[
        ModalComponent, 
        CardComponent, 
        BookComponent, 
        StarListComponent,
        AlertComponent],
    imports:[CommonModule],
    providers:[ {provide:ALocalStorage, useClass: LocalStorage}
        ]

})
   
export class SharedModule{}