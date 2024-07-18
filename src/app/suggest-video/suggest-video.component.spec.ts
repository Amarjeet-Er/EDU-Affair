import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestVideoComponent } from './suggest-video.component';

describe('SuggestVideoComponent', () => {
  let component: SuggestVideoComponent;
  let fixture: ComponentFixture<SuggestVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuggestVideoComponent]
    });
    fixture = TestBed.createComponent(SuggestVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
