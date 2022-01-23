import { Component, OnInit } from '@angular/core';
import { GroupService } from 'src/app/Services/group.service';

@Component({
  selector: 'app-initialize-groups-button',
  templateUrl: './initialize-groups-button.component.html',
  styleUrls: ['./initialize-groups-button.component.css']
})

/**
 * Button initilize groups from config
 */
export class InitializeGroupsButtonComponent implements OnInit {

  /**
   * Constructor
   * @param groupService 
   */
  constructor(private groupService: GroupService) { }

  onClick(){
    this.groupService.initializeGroup().subscribe(groups => {console.log(groups)});
  }

  ngOnInit(): void {
    this.onClick();
  }

}
