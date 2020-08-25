import {ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

export class MockActivatedRoute extends ActivatedRoute{
    constructor(){
        super();
        this.params = of({});
    }
}