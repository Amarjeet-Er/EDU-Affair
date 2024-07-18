import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequstCallComponent } from './requst-call.component';

describe('RequstCallComponent', () => {
  let component: RequstCallComponent;
  let fixture: ComponentFixture<RequstCallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequstCallComponent]
    });
    fixture = TestBed.createComponent(RequstCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
