import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyWithEmailComponent } from './verify-with-email.component';

describe('VerifyWithEmailComponent', () => {
  let component: VerifyWithEmailComponent;
  let fixture: ComponentFixture<VerifyWithEmailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerifyWithEmailComponent]
    });
    fixture = TestBed.createComponent(VerifyWithEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
