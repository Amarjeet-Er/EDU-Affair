import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDeviesInfoComponent } from './get-devies-info.component';

describe('GetDeviesInfoComponent', () => {
  let component: GetDeviesInfoComponent;
  let fixture: ComponentFixture<GetDeviesInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetDeviesInfoComponent]
    });
    fixture = TestBed.createComponent(GetDeviesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
