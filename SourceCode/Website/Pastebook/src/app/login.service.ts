import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

interface UserCredentials {
  emailAddress: string;
  password: string;
}


@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private loggedInUserSubject: BehaviorSubject<UserCredentials>;
  public loggedInUser: Observable<UserCredentials>;

  constructor(private http: HttpClient) { }
    this.loggedInUserSubject = new BehaviorSubject<UserCredentials>
}
