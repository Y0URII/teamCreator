import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})

/**
 * Component Page Admin
 */
export class AdminPageComponent implements OnInit {

  configurationForm = new FormGroup({
    totalUsers: new FormControl(''),
    usersByGroup: new FormControl(''),
    congifLastGroup: new FormControl('')
  });

  constructor() { 
    //TODO add IOD
  }

  ngOnInit(): void {
  }

  onSubmit() {
    //TODO set in service
  }

}
