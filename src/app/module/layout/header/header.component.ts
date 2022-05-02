import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pwa-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  installEvent = null;

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

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
  goProduct(){
    this.router.navigate(['/']);
  }

}
