import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`http://localhost:5000/login`, { EmailAddress: `${email}`, Password: `${password}` });
  }

  logout(): Observable<any> {
    return this.http.delete<any>(`http://localhost:5000/login/`);
  }
}