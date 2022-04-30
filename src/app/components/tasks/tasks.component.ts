import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { LoggerService } from '../../services/logger.service';
import { Task } from '../../task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(
    private tasksService: TasksService,
    private loggerService: LoggerService
  ) {}

  ngOnInit(): void {
    this.tasksService.getTasks().subscribe((tasks) => {
      this.loggerService.log(`There are ${tasks.length} tasks in the list`);
      this.tasks = tasks;
    });
  }

  handleAdd(): void {
    console.log('Add task');
  }

  handleDelete(task: Task): void {
    this.tasksService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter((item) => item.id !== task.id);
    });
  }

  handleUpdate(task: Task): void {
    task.completed = !task.completed;

    this.tasksService.updateTask(task).subscribe(() => {
      if (task.completed) {
        this.loggerService.log(`${task.text} is complete`);
      } else {
        this.loggerService.log(`${task.text} is not complete`);
      }
    });
  }
}
