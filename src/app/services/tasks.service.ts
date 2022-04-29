import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../task';

const config = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private endpoint = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.endpoint);
  }

  deleteTask(task: Task): Observable<Task[]> {
    const taskUrl = `${this.endpoint}/${task.id}`;
    return this.http.delete<Task[]>(taskUrl);
  }

  updateTask(task: Task): Observable<Task[]> {
    const taskUrl = `${this.endpoint}/${task.id}`;
    return this.http.patch<Task[]>(taskUrl, task, config);
  }
}
