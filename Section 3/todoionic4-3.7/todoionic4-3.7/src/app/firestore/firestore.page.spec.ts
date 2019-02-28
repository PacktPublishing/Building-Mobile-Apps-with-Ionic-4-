import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirestorePage } from './firestore.page';

describe('FirestorePage', () => {
  let component: FirestorePage;
  let fixture: ComponentFixture<FirestorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirestorePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirestorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
