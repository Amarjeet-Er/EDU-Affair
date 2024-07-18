import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumSubjectComponent } from './premium-subject.component';

describe('PremiumSubjectComponent', () => {
  let component: PremiumSubjectComponent;
  let fixture: ComponentFixture<PremiumSubjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PremiumSubjectComponent]
    });
    fixture = TestBed.createComponent(PremiumSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
