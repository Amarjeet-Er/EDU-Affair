import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegWithEmailComponent } from './reg-with-email.component';

describe('RegWithEmailComponent', () => {
  let component: RegWithEmailComponent;
  let fixture: ComponentFixture<RegWithEmailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegWithEmailComponent]
    });
    fixture = TestBed.createComponent(RegWithEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
