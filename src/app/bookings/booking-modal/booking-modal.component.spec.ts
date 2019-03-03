import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingModalPage } from './booking-modal.page';

describe('BookingModalPage', () => {
  let component: BookingModalPage;
  let fixture: ComponentFixture<BookingModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
