import { TodosComponent } from './todos.component'; 
import { TodoService } from './todo.service'; 
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EMPTY, from, throwError } from 'rxjs';


describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;
  let service: TodoService;

  const todoService = jasmine.createSpyObj('TodoService', ['getTodos', 'add', 'delete']);
  

  beforeEach(() => {
  
    TestBed.configureTestingModule({
      declarations: [ TodosComponent ],
      providers: [ { provide: TodoService, useValue: todoService } ]
    });

    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;

    service = fixture.debugElement.injector.get(TodoService);
  });

  it('should set todos property with the items returned from the server', () => {
    let todos = [1, 2, 3];
    let getTodosSpy = todoService.getTodos.and.returnValue(from([ todos ]));

    component.ngOnInit();

    expect(component.todos).toBe(todos);
  });

  it('should call the server to save the changes when a new todo item is added', () => {
    let addSpy1 = todoService.add.and.returnValue(EMPTY);
    component.add();

    expect(addSpy1).toHaveBeenCalled();
  });

  it('should add the new todo returned from the server', () => {
    let todo = { id: 1 };
    let addSpy2 = todoService.add.and.returnValue(from([ todo ]));

    component.add();

    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  });

  it('should set the message property if server returns an error when adding a new todo', () => {
    let error = 'error from the server';
    let addSpy3 = todoService.add.and.returnValue(throwError(error));

    component.add();

    expect(component.message).toBe(error);
  });

  it('should call the server to delete a todo item if the user confirms', () => {
    let windowSpy1 = spyOn(window, 'confirm').and.returnValue(true);
    let deleteSpy1 = todoService.delete.and.returnValue(EMPTY);

    component.delete(1);

    expect(deleteSpy1).toHaveBeenCalledWith(1);
  });

  it('should NOT call the server to delete a todo item if the user cancels', () => {
    let windowSpy2 = spyOn(window, 'confirm').and.returnValue(false);
    let deleteSpy2 = todoService.delete.and.returnValue(EMPTY);

    component.delete(1);

    expect(deleteSpy2).not.toHaveBeenCalled();
  });
});