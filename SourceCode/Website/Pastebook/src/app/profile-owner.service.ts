import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


interface IUser{
  about: string,
  birthday: number,
  cover: string,
  duplicate: number,
  emailAddress: string,
  fullName: string,
  gender: string,
  lastName: string,
  mobileNuber: string,
  newPassword?: string,
  password: string,
  photo: string,
  profileLink: string,
  profileName: string,
  readableBirthday?: string,
  userId: number
}

@Injectable({
  providedIn: 'root'
})
export class ProfileOwnerService {

  constructor(private http: HttpClient) { }

  getProfileOwner(profileLink: string): Observable<Object>{
    const url = `http://localhost:5000/${profileLink}`;
    return this.http.get<IUser>(url);
  }
}
