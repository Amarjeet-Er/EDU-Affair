import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McqListComponent } from './mcq-list.component';

describe('McqListComponent', () => {
  let component: McqListComponent;
  let fixture: ComponentFixture<McqListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [McqListComponent]
    });
    fixture = TestBed.createComponent(McqListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
