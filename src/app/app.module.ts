import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule} from './app-routing.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SharedModule } from './shared/shared.module';
import { AlertService } from './components/alert/services/alert/alert.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    SharedModule
  ],
  providers: [AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
