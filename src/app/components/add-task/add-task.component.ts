import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../task';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  id: string = uuidv4();
  name!: string;
  time!: string;
  completed: boolean = false;
  @Output() onSubmit: EventEmitter<Task> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleSubmit(): void {
    const newTask = {
      id: this.id,
      name: this.name,
      time: this.time,
      completed: this.completed,
    };

    this.onSubmit.emit(newTask);

    this.name = '';
    this.time = '';
  }
}
