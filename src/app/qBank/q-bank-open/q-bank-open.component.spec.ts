import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QBankOpenComponent } from './q-bank-open.component';

describe('QBankOpenComponent', () => {
  let component: QBankOpenComponent;
  let fixture: ComponentFixture<QBankOpenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QBankOpenComponent]
    });
    fixture = TestBed.createComponent(QBankOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
