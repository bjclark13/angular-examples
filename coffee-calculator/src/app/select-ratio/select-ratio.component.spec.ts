import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRatioComponent } from './select-ratio.component';

describe('SelectRatioComponent', () => {
  let component: SelectRatioComponent;
  let fixture: ComponentFixture<SelectRatioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectRatioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
