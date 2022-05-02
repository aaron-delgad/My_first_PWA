import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from "./module/dialog/dialog.component"

@Component({
  selector: 'pwa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

 constructor(private readonly swUpdate: SwUpdate,
  public dialogo: MatDialog){}

  ngOnInit(): void {
    this.updatePWA();
  }

  updatePWA(){
    this.swUpdate.available.subscribe(value=>{
      if(value){
      this.dialogo.open(DialogComponent, {data: '¿Actualizar a la versión mas reciente?'})
      .afterClosed()
      .subscribe((confirmado: boolean) =>{
        if(confirmado){
          console.log('update:', value);
          window.location.reload();
        }
      });
    }
    });
  }
}
