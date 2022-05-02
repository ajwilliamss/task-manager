import { Component, OnInit } from '@angular/core';
import { ToggleService } from '../../services/toggle.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Manager';
  displayAddForm: boolean = true;
  subscription: Subscription;

  constructor(private toggleService: ToggleService) {
    this.subscription = this.toggleService
      .onToggle()
      .subscribe((value) => (this.displayAddForm = value));
  }

  ngOnInit(): void {}

  handleDisplay(): void {
    this.toggleService.toggleDisplay();
  }
}
