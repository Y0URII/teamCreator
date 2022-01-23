import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { GroupConfiguration, LastGroupConfig } from 'src/app/Models/group-configuration';
import { GroupConfigService } from 'src/app/Services/group-config.service';

@Component({
  selector: 'app-form-configuration',
  templateUrl: './form-configuration.component.html',
  styleUrls: ['./form-configuration.component.css']
})

/**
 * Form Configuration component
 */
export class FormConfigurationComponent implements OnInit {

  //#region Properties

  /**
   * Last groupConfiguration saved from service
   */
  groupConfiguration: GroupConfiguration | null = null;

  /**
   * local enum LastGroupConfig for view
   */
  configs = LastGroupConfig;

  /**
   * Indicator of error during set config in service
   */
  isSetError: boolean = false;

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
  constructor(private groupConfigService: GroupConfigService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  /**
   * OnSubmit action update group configuration
   */
  onSubmit() {
    let result = this.configurationForm.value;
    console.log(result);
    this.groupConfigService.setGroupConfig(this.configurationForm.value);
    this.isSetError = this.groupConfigService.getSetError();
    // if no error during set config
    if (!this.groupConfigService.getSetError()) {
      this.groupConfiguration = this.groupConfigService.getGroupConfig();
      this.configurationForm.reset();
    }
  }

  //#region Validators

  /**
   * Validators
   * @param control
   * @returns 
   */
  shouldShowRequiredError(control: AbstractControl) {
    return !control.pristine && control.hasError('required');
  }

  /**
   * Validator minimum number of group
   * @param control 
   * @returns 
   */
  shouldHaveMinGroupError(control: AbstractControl) {
    return control.value < 1;
  }

  /**
   * Validator minimum number of user
   * @param control 
   * @returns 
   */
  shouldHaveMinUserError(control: AbstractControl) {
    return control.value < 2;
  }

  //#endregion

  /**
   * Get total number of users base on the configuration group
   * @returns number total of users
   */
  getTotalUsers() {
    if (this.groupConfiguration != null) {
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
