import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeVideoComponent } from './free-video.component';

describe('FreeVideoComponent', () => {
  let component: FreeVideoComponent;
  let fixture: ComponentFixture<FreeVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreeVideoComponent]
    });
    fixture = TestBed.createComponent(FreeVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
