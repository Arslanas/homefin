import {Component, HostBinding, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {fadeStateTrigger} from "../shared/animations/fade.animation";

@Component({
  selector: 'hf-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  animations:[fadeStateTrigger]
})
export class AuthComponent implements OnInit{
  @HostBinding('@fade') a = true;
  display = 'none';
  constructor(private router: Router){

  }

  ngOnInit(): void {
    this.router.navigate(['/login']);
  }

}
