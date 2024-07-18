import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McqUnitComponent } from './mcq-unit.component';

describe('McqUnitComponent', () => {
  let component: McqUnitComponent;
  let fixture: ComponentFixture<McqUnitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [McqUnitComponent]
    });
    fixture = TestBed.createComponent(McqUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
