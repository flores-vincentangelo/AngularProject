import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postsList: any[] = [];
  user: any = null;
  isAddPostVisible = false;

  constructor(private postsService: PostsService, 
              private homeService: HomeService) { }

  async ngOnInit() {
    this.postsService.getPosts()
      .subscribe(data => {
        this.postsList = data;
      });
    
    this.homeService.getUser()
    .subscribe(data => {
      this.user = data;
    });
  }

  AddPostVisibleToggle(){
    this.isAddPostVisible = !this.isAddPostVisible;
  }

}
