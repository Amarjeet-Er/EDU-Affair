import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppThemComponent } from './app-them.component';

describe('AppThemComponent', () => {
  let component: AppThemComponent;
  let fixture: ComponentFixture<AppThemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppThemComponent]
    });
    fixture = TestBed.createComponent(AppThemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
