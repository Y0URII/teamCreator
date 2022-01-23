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
   * Group configuration from service
   */
  groupConfiguration: GroupConfiguration | null = null;

  /**
   * Subscrube to groupConfig from db
   */
  getConfig(): void {
    this.groupConfigService.getGroupConfig().subscribe(config => this.groupConfiguration = config.length != 0 ? config[0] : null);
  }

  /**
   * local enum LastGroupConfig for view
   */
  configs = LastGroupConfig;

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
  constructor(private groupConfigService: GroupConfigService, private formBuilder: FormBuilder) { 
    // This is intentional
  }

  ngOnInit(): void {
    this.getConfig();
  }

  /**
   * OnSubmit action update group configuration
   */
  onSubmit() {
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
