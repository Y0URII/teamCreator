import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/Models/group';
import { GroupService } from 'src/app/Services/group.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})

/**
 * Component Page Admin
 */
export class AdminPageComponent implements OnInit {

  public listOfGroups: Array<Group> = new Array<Group>();

  /**
   * Constructor 
   */
  constructor() {  
    // This is intentional
  }

  ngOnInit(): void {
    // This is intentional
    console.log(history.state.user);
  }

}
