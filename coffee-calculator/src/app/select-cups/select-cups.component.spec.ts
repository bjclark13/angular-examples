import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCupsComponent } from './select-cups.component';

describe('SelectCupsComponent', () => {
  let component: SelectCupsComponent;
  let fixture: ComponentFixture<SelectCupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectCupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
