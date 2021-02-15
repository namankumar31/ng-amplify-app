import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumerianComponent } from './sumerian.component';

describe('SumerianComponent', () => {
  let component: SumerianComponent;
  let fixture: ComponentFixture<SumerianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumerianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SumerianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
