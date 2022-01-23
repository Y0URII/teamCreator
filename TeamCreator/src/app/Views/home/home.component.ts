import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { User, userList } from 'src/app/Models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userList = userList;
  
  constructor(private router: Router) { }

  // Si l'utiliseur n'est pas connecté, redirection vers l'authentification
  ngOnInit(): void {
    if(history.state.user == undefined){
      this.router.navigate(['/auth']);
    }

    console.log(history.state.user);
  }

}
