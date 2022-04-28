import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor() {}

  log(message: any): void {
    console.log(message);
  }
  error(message: any): void {
    console.error(message);
  }
  warn(message: any): void {
    console.warn(message);
  }
}
