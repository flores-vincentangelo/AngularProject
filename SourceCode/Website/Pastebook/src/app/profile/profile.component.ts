import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  private subscription: Subscription | null = null;
  profileLink: string = '';
  isAddpPostVisible = false;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.subscription = this.route.paramMap.subscribe(async (paramMap) => {
      this.profileLink = paramMap.get('profileLink') as string;
    });
  }

  ngOnDestroy(): void {
      this.subscription?.unsubscribe();
  }

  AddpPostVisibleToggle(){
    this.isAddpPostVisible = !this.isAddpPostVisible;
  }


}
