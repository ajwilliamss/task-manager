import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() text!: string;
  @Input() colour!: string;
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleClick(): void {
    this.onClick.emit();
  }
}
