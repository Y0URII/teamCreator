import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-disconnect-btn',
  templateUrl: './disconnect-btn.component.html',
  styleUrls: ['./disconnect-btn.component.css']
})
export class DisconnectBtnComponent{


  constructor(private router: Router) {}

  onClick(){
    history.state.user = undefined;
    this.router.navigate(['/auth']);
  }
}
