import { Component, OnInit } from '@angular/core';
import { GroupService } from 'src/app/Services/group.service';

@Component({
  selector: 'app-create-group-button',
  templateUrl: './create-group-button.component.html',
  styleUrls: ['./create-group-button.component.css']
})

/**
 * 
 */
export class CreateGroupButtonComponent implements OnInit {

  constructor(private groupService: GroupService) { }

  ngOnInit(): void {
  }

  onClick(){
    //TODO: call groupService and method to add group (and change config ?)
  }

}
