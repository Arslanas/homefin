import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../shared/service/auth.service";
import {User} from "../../../../shared/entity/user.entity";
import {Router} from "@angular/router";

@Component({
  selector: 'hf-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  date : Date = new Date();
  user:User;

  constructor(private authService: AuthService, private router : Router) { }

  ngOnInit() {
    this.user = JSON.parse(window.localStorage.getItem('user'));
  }

  onLogout(){
    this.authService.logout();
    this.router.navigate(["login"]);
  }

}
