import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnerIconComponent } from './winner-icon.component';

describe('WinnerIconComponent', () => {
  let component: WinnerIconComponent;
  let fixture: ComponentFixture<WinnerIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinnerIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinnerIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
