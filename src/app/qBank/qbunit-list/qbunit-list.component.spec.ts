import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QBunitListComponent } from './qbunit-list.component';

describe('QBunitListComponent', () => {
  let component: QBunitListComponent;
  let fixture: ComponentFixture<QBunitListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QBunitListComponent]
    });
    fixture = TestBed.createComponent(QBunitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
