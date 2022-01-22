import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisconnectBtnComponent } from './disconnect-btn.component';

describe('DisconnectBtnComponent', () => {
  let component: DisconnectBtnComponent;
  let fixture: ComponentFixture<DisconnectBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisconnectBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisconnectBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
