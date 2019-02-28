import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosPage } from './todos.page';

describe('TodosPage', () => {
  let component: TodosPage;
  let fixture: ComponentFixture<TodosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
