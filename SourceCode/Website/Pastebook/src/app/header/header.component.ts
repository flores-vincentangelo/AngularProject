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

  logOut() {
    this.login.logout().subscribe(data => console.log(data)
    );
    this.router.navigate(['/login']);
    document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "sessionId=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    
  }
}