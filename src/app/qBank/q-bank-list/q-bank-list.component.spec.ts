import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QBankListComponent } from './q-bank-list.component';

describe('QBankListComponent', () => {
  let component: QBankListComponent;
  let fixture: ComponentFixture<QBankListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QBankListComponent]
    });
    fixture = TestBed.createComponent(QBankListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
