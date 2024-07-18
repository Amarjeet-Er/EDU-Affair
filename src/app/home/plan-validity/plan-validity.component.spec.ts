import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanValidityComponent } from './plan-validity.component';

describe('PlanValidityComponent', () => {
  let component: PlanValidityComponent;
  let fixture: ComponentFixture<PlanValidityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanValidityComponent]
    });
    fixture = TestBed.createComponent(PlanValidityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
