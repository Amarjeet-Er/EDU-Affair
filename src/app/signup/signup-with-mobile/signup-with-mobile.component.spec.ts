import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupWithMobileComponent } from './signup-with-mobile.component';

describe('SignupWithMobileComponent', () => {
  let component: SignupWithMobileComponent;
  let fixture: ComponentFixture<SignupWithMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupWithMobileComponent]
    });
    fixture = TestBed.createComponent(SignupWithMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
