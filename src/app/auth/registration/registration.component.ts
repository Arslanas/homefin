import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../shared/service/user.service";
import {User} from "../../shared/entity/user.entity";
import {Message} from "../../shared/entity/message.entity";
import {Router} from "@angular/router";

@Component({
  selector: 'hf-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;


  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'name': new FormControl(null, [Validators.required]),
      'agree': new FormControl(false, [Validators.requiredTrue]),
    });
  }

  onSubmit() {
    const {name, email, password} = this.form.value;
    const newUser = new User(email, password, name);
    this.userService.createUser(newUser).subscribe((user: User) => {
      console.log(user);
      this.router.navigate(["/login"], {
        queryParams: {nowCanLogin: true}
      })
    })
  }
}
