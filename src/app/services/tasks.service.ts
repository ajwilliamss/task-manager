import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../task';
import { TaskList } from '../task-list';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor() {}

  getTasks(): Observable<Task[]> {
    const tasks = of(TaskList);
    return tasks;
  }
}
