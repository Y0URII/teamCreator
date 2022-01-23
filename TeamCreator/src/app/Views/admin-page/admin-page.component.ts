import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { GroupConfiguration, LastGroupConfig } from 'src/app/Models/group-configuration';
import { GroupConfigService } from 'src/app/Services/group-config.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})

/**
 * Component Page Admin
 */
export class AdminPageComponent implements OnInit {

  //#region Properties

  /**
   * Last groupConfiguration saved from service
   */
  groupConfiguration : GroupConfiguration | null = null;

  /**
   * local enum LastGroupConfig for view
   */
  configs = LastGroupConfig;

  /**
   * Form input for group configuration
   */
  configurationForm = this.formBuilder.group({
    totalUsers: [2, Validators.required],
    usersByGroup: [2, Validators.required],
    configLastGroup: ['']
  });

  //#endregion

  /**
   * Constructor
   * @param groupConfigService 
   * @param formBuilder 
   */
  constructor(private groupConfigService: GroupConfigService, private formBuilder: FormBuilder) {  }

  ngOnInit(): void {
  }

  /**
   * OnSubmit action update group configuration
   */
  onSubmit() {
    let result = this.configurationForm.value;
    console.log(result);
    let lastConfig: keyof typeof LastGroupConfig = result.configLastGroup;
    this.groupConfigService.setGroupConfig(this.configurationForm.value);
    this.groupConfiguration = this.groupConfigService.getGroupConfig();
    this.configurationForm.reset();
  }

  /**
   * Validators
   * @param control
   * @returns 
   */
  shouldShowRequiredError(control: AbstractControl){
    return !control.pristine && control.hasError('required');
  }

  /**
   * Get total number of users base on the configuration group
   * @returns number total of users
   */
  getTotalUsers(){
    if(this.groupConfiguration != null){
      let result = this.groupConfiguration.numberGroups * this.groupConfiguration.numberUsersByGroup; 
      switch (this.groupConfiguration.lastGroupConfig) {
        case LastGroupConfig.LastMax:
          result += 1;
          break;
        case LastGroupConfig.LastMin:
          result -= 1;
          break;
        case LastGroupConfig.None:
        default:
          break;
      }
      return result;
    }
    return '';
  }

}
