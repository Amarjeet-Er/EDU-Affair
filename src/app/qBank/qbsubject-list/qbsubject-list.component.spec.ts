import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QBsubjectListComponent } from './qbsubject-list.component';

describe('QBsubjectListComponent', () => {
  let component: QBsubjectListComponent;
  let fixture: ComponentFixture<QBsubjectListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QBsubjectListComponent]
    });
    fixture = TestBed.createComponent(QBsubjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
