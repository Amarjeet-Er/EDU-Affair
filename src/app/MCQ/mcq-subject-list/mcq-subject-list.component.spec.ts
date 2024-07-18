import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McqSubjectListComponent } from './mcq-subject-list.component';

describe('McqSubjectListComponent', () => {
  let component: McqSubjectListComponent;
  let fixture: ComponentFixture<McqSubjectListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [McqSubjectListComponent]
    });
    fixture = TestBed.createComponent(McqSubjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
