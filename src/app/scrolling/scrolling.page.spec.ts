import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollingPage } from './scrolling.page';

describe('ScrollingPage', () => {
  let component: ScrollingPage;
  let fixture: ComponentFixture<ScrollingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
