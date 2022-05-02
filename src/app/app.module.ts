import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRouting } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MatButtonModule} from '@angular/material/button';
import { LayoutModule } from './module/layout/layout.module';
import { DialogComponent } from './module/dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    LayoutModule,
    MatButtonModule,
    BrowserAnimationsModule,
    AppRouting,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogComponent
  ]
})
export class AppModule { }
