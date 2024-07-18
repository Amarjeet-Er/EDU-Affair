import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoslistComponent } from './videoslist.component';

describe('VideoslistComponent', () => {
  let component: VideoslistComponent;
  let fixture: ComponentFixture<VideoslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoslistComponent]
    });
    fixture = TestBed.createComponent(VideoslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
