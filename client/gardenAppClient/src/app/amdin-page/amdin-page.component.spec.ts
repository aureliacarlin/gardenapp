import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmdinPageComponent } from './amdin-page.component';

describe('AmdinPageComponent', () => {
  let component: AmdinPageComponent;
  let fixture: ComponentFixture<AmdinPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmdinPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmdinPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
