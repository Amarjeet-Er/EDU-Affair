import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyWithMobComponent } from './verify-with-mob.component';

describe('VerifyWithMobComponent', () => {
  let component: VerifyWithMobComponent;
  let fixture: ComponentFixture<VerifyWithMobComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerifyWithMobComponent]
    });
    fixture = TestBed.createComponent(VerifyWithMobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
