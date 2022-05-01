import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'pwa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  installEvent = null;

  @HostListener('window: beforeinstallprompt', ['$event'])
  onBeforeInstallPrompt(event:Event){
    console.log(event);
    event.preventDefault();
    this.installEvent = event;
  }
  installByUser(){
    if(this.installEvent){
      this.installEvent.prompt();
      this.installEvent.userChoice
      .then(rpta=>{
          console.log(rpta);
      });
    }
  }

}
