import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAccountPanelVisible = false;
  constructor(private login: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  isAccountPanelVisibleToggle(){
    this.isAccountPanelVisible = !this.isAccountPanelVisible;
  }

  // logOut() {
  //   this.login.logout().subscribe((data: any) => {
  //     this.router.navigate(['/login']);
  //   });
  // }
}