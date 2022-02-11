import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: any = null;

  constructor(private homeService: HomeService) { }

  async ngOnInit() {
    this.homeService.getUser()
      .subscribe(data => {
        this.user = data;
      });
  }

}
