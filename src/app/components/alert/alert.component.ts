import { Component, Input, OnInit } from "@angular/core";
import { AlertTypes } from './models/enums/alert-types.enum';
import { AlertService } from './services/alert/alert.service';
import { ALocalStorage } from 'src/app/shared/services/local-storage/alocal.storage.model';
import { LocalStorageKey } from 'src/app/shared/models/enums/local-storage-key.enum';
import { Alert } from './models/alert.model';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss'],
    
})

export class AlertComponent implements OnInit{

    public alert:Alert = new Alert()
    
    public alertTypes  = AlertTypes;
    public isShown:boolean = true;
    public isNeeded: boolean = false;

    constructor(public alertService: AlertService, public localStorage:ALocalStorage){
       
    }
    
  
    public ngOnInit():void{
        this.alertService.alertSubject.asObservable().subscribe((data) =>{
         this.alert = new Alert(data);
        })
      this.mustCallAlerts();
    }

    public close():void{
        this.isShown = false;
        this.localStorage.setItem(this.alert.key, 'true');

    }

    private  mustCallAlerts():void {
      if(!this.localStorage.getItem(LocalStorageKey.CookieNotification)){

      this.callCookieNotification();
     
       
      }
    }

  private callCookieNotification():void{
       this.isNeeded = true;

        this.alert = new Alert(
          {
          type:AlertTypes.Info, title:"'What do you use Cookies for?'" , 
          content:"'We use cookies to recognize your repeated visits and preferences, as  well as to measure the effectiveness of campaigns and analyze traffic.'",
          key:LocalStorageKey.CookieNotification
          }
        
        );
  }
    
} 