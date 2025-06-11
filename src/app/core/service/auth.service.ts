import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable, of, tap } from 'rxjs';

export interface User {
  username: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor() {
    const loggedUser = localStorage.getItem('currentUser');
    if (loggedUser) {
      this.currentUserSubject.next(JSON.parse(loggedUser));
    }
  }

  login(username: string, password: string): Observable<User> {
    const userData: User = { username: username };
    return of(userData).pipe(
      delay(1000),
      tap((user) => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  isLoggedIn(): boolean {
    return !!this.currentUserSubject.value;
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }
}
