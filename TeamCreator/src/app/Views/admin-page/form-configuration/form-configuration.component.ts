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
  groupConfiguration: GroupConfiguration = new GroupConfiguration(-1,-1,LastGroupConfig.None, 0);

  /**
   * local enum LastGroupConfig for view
   */
  configs = LastGroupConfig;
  
  getconfig(): void {
    this.groupConfigService.getGroupConfig().subscribe(config => this.groupConfiguration = config);
  };

  /**
   * Form input for group configuration
   */
  configurationForm = this.formBuilder.group({
    totalUsers: [2, Validators.required],
    numberUsersByGroup: [2, Validators.required],
    configLastGroup: [LastGroupConfig],
    numberGroups: [0]
  });

  //#endregion

  /**
   * Constructor
   * @param groupConfigService 
   * @param formBuilder 
   */
  constructor(private groupConfigService: GroupConfigService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getconfig();
  }

  /**
   * OnSubmit action update group configuration
   */
  onSubmit() {
    console.log(this.configurationForm.value);
    this.groupConfigService.setGroupConfig(this.configurationForm.value)
      .subscribe(config => {
        this.groupConfiguration = config;
        console.log(config);
      });
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
}
