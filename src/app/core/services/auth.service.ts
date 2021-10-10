import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authenticated = false;

  constructor() { }

  public isAuthenticated(): boolean {
    return this.authenticated;
  }

  public authenticate(): void {
    this.authenticated = true;
  }
}
