import { Component, OnInit } from '@angular/core';
import { Task } from '../../task';
import { TaskList } from '../../task-list';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = TaskList;

  constructor() {}

  ngOnInit(): void {}
}
