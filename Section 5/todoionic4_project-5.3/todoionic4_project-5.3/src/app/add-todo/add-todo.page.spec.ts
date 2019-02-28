import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodoPage } from './add-todo.page';

describe('AddTodoPage', () => {
  let component: AddTodoPage;
  let fixture: ComponentFixture<AddTodoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTodoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTodoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
