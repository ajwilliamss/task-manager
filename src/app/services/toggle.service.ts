import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToggleService {
  private displayAddForm: boolean = true;
  private subject = new Subject<boolean>();

  constructor() {}

  toggleDisplay(): void {
    this.displayAddForm = !this.displayAddForm;
    this.subject.next(this.displayAddForm);
  }

  onToggle(): Observable<boolean> {
    return this.subject.asObservable();
  }
}
