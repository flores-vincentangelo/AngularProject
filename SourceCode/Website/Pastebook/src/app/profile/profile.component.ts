import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProfileOwnerService } from '../profile-owner.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  private subscription: Subscription | null = null;
  profileLink: string = '';
  profileOwner: any = '';
  profilePhoto: string = "../../assets/img_avatar.png";
  constructor(
    private route: ActivatedRoute,
    private profileOwnerService: ProfileOwnerService
  ) { }

  ngOnInit(): void {
    this.subscription = this.route.paramMap.subscribe(async (paramMap) => {
      this.profileLink = paramMap.get('profileLink') as string;
    });
    this.profileOwnerService.getProfileOwner(this.profileLink).subscribe(data => {
      this.profileOwner = data;
    });
  }

  ngOnDestroy(): void {
      this.subscription?.unsubscribe();
  }
}
