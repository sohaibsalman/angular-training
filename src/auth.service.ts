import { Injectable } from '@angular/core';

// Fake authentication class
@Injectable()
export class AuthService {
  loggedIn = false;

  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 800);
    });
    return promise;
  }

  login() {
    this.loggedIn = true;
  }

  lougout() {
    this.loggedIn = false;
  }
}
