import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChnagePasswordComponent } from './chnage-password.component';

describe('ChnagePasswordComponent', () => {
  let component: ChnagePasswordComponent;
  let fixture: ComponentFixture<ChnagePasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChnagePasswordComponent]
    });
    fixture = TestBed.createComponent(ChnagePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
