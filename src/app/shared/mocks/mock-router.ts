import { Subject } from 'rxjs';

export class MockRouter{
    public routerSubject = new Subject<any>();

    public get events(): Subject<any>{
        return this.routerSubject;
    }
}