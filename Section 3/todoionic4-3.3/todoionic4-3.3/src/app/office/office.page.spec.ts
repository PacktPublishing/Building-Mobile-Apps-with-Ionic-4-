import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficePage } from './office.page';

describe('OfficePage', () => {
  let component: OfficePage;
  let fixture: ComponentFixture<OfficePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
