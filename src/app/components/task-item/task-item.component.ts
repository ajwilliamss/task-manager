import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../task';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() onClick: EventEmitter<Task> = new EventEmitter();
  @Output() onToggle: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;
  faCheck = faCheck;

  constructor() {}

  ngOnInit(): void {}

  handleClick(task: Task): void {
    this.onClick.emit(task);
  }

  handleToggle(task: Task): void {
    this.onToggle.emit(task);
  }
}
