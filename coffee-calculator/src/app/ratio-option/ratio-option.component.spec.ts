import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatioOptionComponent } from './ratio-option.component';

describe('RatioOptionComponent', () => {
  let component: RatioOptionComponent;
  let fixture: ComponentFixture<RatioOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatioOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatioOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
