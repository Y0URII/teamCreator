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
});
