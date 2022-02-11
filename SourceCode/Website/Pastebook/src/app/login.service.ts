import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, map } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';


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
  private cookie_email='';
  private cookie_password='';
  private all_cookies:any='';

  constructor(private http: HttpClient, private cookieService:CookieService) {
    this.loggedInUserSubject = new BehaviorSubject<UserCredentials>(JSON.parse(this.cookieService.get('loggedInUser')));
    this.loggedInUser = this.loggedInUserSubject.asObservable();
  }

  public get loggedInUserValue(): UserCredentials {
    return this.loggedInUserSubject.value;
  }

  login(cookie_email: any, cookie_password: any) {
    return this.http.post<any>(`http://localhost/4200/login`, { cookie_email, cookie_password})
      .pipe(map(userCredentials => {
        this.cookieService.set('loggedInUser', JSON.stringify(userCredentials));
        this.loggedInUserSubject.next(userCredentials);
        return userCredentials;
      }))
  }

  // logout(){
  //   this.cookieService.delete('loggedInUser');
  //   // this.loggedInUserSubject.next(null);
  // }

}