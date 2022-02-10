import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface PostModel {
  userId: number;
  postId: number;
  datePosted: number;
  caption: string;
  photoId: number;
  photo: string;
  profileLink: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Object[]> {
    return this.http.get<any>('http://localhost:5000/postslist');
  }

}
