import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomLibService {

  constructor() { }

  getWelcomeMessage(): string {
    return 'Welcome to CustomLibService!';
  }
}
