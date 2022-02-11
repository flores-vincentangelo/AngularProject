import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

interface UserCredentials {
  emailAddress: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private cookie_email='';
  private cookie_password='';
  private all_cookies:any='';

  constructor(private http: HttpClient, private cookieService:CookieService) {
  }

  login(cookie_email: any, cookie_password: any):any {
    var userCreds = {
      EmailAddress : cookie_email,
      Password : cookie_password
    }
    return this.http.post<any>(`http://localhost:5000/login`, userCreds);
  }

  logout(){
    return this.http.delete(`http://localhost:5000/login`);
  }
}