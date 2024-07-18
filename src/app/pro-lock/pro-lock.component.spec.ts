import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProLockComponent } from './pro-lock.component';

describe('ProLockComponent', () => {
  let component: ProLockComponent;
  let fixture: ComponentFixture<ProLockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProLockComponent]
    });
    fixture = TestBed.createComponent(ProLockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
