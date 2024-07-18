import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProLock3Component } from './pro-lock3.component';

describe('ProLock3Component', () => {
  let component: ProLock3Component;
  let fixture: ComponentFixture<ProLock3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProLock3Component]
    });
    fixture = TestBed.createComponent(ProLock3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
