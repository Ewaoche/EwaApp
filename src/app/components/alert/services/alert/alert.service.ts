import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Alert } from '../../models/alert.model';

@Injectable()
export class AlertService {

public alertSubject = new Subject();


public callAlert(alert:Alert){
    
this.alertSubject.next(alert)

}

 
}