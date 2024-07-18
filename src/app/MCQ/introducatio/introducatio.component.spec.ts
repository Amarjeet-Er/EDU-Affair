import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroducatioComponent } from './introducatio.component';

describe('IntroducatioComponent', () => {
  let component: IntroducatioComponent;
  let fixture: ComponentFixture<IntroducatioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntroducatioComponent]
    });
    fixture = TestBed.createComponent(IntroducatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
