import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProLock2Component } from './pro-lock2.component';

describe('ProLock2Component', () => {
  let component: ProLock2Component;
  let fixture: ComponentFixture<ProLock2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProLock2Component]
    });
    fixture = TestBed.createComponent(ProLock2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
