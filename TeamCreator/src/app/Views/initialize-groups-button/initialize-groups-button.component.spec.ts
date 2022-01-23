import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitializeGroupsButtonComponent } from './initialize-groups-button.component';

describe('InitializeGroupsButtonComponent', () => {
  let component: InitializeGroupsButtonComponent;
  let fixture: ComponentFixture<InitializeGroupsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitializeGroupsButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitializeGroupsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
