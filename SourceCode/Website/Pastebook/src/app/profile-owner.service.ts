import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileOwnerService {

  constructor(private http: HttpClient) { }

  getProfileOwner(profileLink: string): Observable<Object>{
    const url = `http://localhost:5000/${profileLink}`;
    return this.http.get(url);
  }
}
