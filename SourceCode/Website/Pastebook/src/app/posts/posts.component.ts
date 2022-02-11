import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postsList: any[] = [];
  isAddPostVisible = false;

  constructor(private postsService: PostsService) { }

  async ngOnInit() {
    this.postsService.getPosts()
      .subscribe(data => {
        this.postsList = data;
      });
  }

  AddPostVisibleToggle(){
    this.isAddPostVisible = !this.isAddPostVisible;
  }
}
