import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentGetWayComponent } from './payment-get-way.component';

describe('PaymentGetWayComponent', () => {
  let component: PaymentGetWayComponent;
  let fixture: ComponentFixture<PaymentGetWayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentGetWayComponent]
    });
    fixture = TestBed.createComponent(PaymentGetWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
