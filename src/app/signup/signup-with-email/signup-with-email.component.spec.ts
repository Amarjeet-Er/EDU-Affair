import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupWithEmailComponent } from './signup-with-email.component';

describe('SignupWithEmailComponent', () => {
  let component: SignupWithEmailComponent;
  let fixture: ComponentFixture<SignupWithEmailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupWithEmailComponent]
    });
    fixture = TestBed.createComponent(SignupWithEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
