import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-disconnect-btn',
  templateUrl: './disconnect-btn.component.html',
  styleUrls: ['./disconnect-btn.component.css']
})
export class DisconnectBtnComponent{

  constructor(private router: Router) {
    // This is intentional
  }

  // Suppression des données de l'utilisateur + redirection au login
  onClick(){
    history.state.user = undefined;
    this.router.navigate(['/auth']);
  }
}
