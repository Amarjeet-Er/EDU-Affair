import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermandconComponent } from './termandcon.component';

describe('TermandconComponent', () => {
  let component: TermandconComponent;
  let fixture: ComponentFixture<TermandconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TermandconComponent]
    });
    fixture = TestBed.createComponent(TermandconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
