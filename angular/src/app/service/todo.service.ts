import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Todo} from '../interface/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(environment.apiURL_todo);
  }

  saveTodo(todo): Observable<Todo> {
    return this.http.post<Todo>(environment.apiURL_todo, todo);
  }

  updateTodo(todo): Observable<Todo> {
    return this.http.patch<Todo>(environment.apiURL_todo + '/' + todo.id, todo);
  }

  deleteTodo(todo): Observable<Todo> {
    return this.http.delete<Todo>(environment.apiURL_todo + '/' + todo.id);
  }
}

