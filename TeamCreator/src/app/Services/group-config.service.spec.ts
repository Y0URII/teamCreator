import { TestBed } from '@angular/core/testing';
import { LastGroupConfig } from '../Models/group-configuration';
import { GroupConfigService } from './group-config.service';

describe('GroupConfigService', () => {
  let service: GroupConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set groupConfiguration property with no last group configuration', () =>{
    service.setGroupConfig(20, 4, LastGroupConfig.None);
    let groupConfig = service.getGroupConfig();
    expect(groupConfig.numberGroups).toEqual(5);
  });

  it('should set groupConfiguration property with last group configuration lastMax', () =>{
    service.setGroupConfig(21, 5, LastGroupConfig.LastMax);
    let groupConfig = service.getGroupConfig();
    expect(groupConfig.numberGroups).toEqual(4);
  });

  it('should set groupConfiguration property with last group configuration lastMin', () =>{
    service.setGroupConfig(19, 5, LastGroupConfig.LastMin);
    let groupConfig = service.getGroupConfig();
    expect(groupConfig.numberGroups).toEqual(4);
  });

  it('should set groupConfiguration property with last group configuration lastMin', () =>{
    service.setGroupConfig(22, 5, LastGroupConfig.LastMin);
    let groupConfig = service.getGroupConfig();
    expect(groupConfig.numberGroups).toEqual(0);
  });
});
