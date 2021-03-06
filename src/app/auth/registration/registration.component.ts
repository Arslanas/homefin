import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../shared/service/user.service";
import {User} from "../../shared/entity/user.entity";
import {Message} from "../../shared/entity/message.entity";
import {Router} from "@angular/router";
import {AuthService} from "../../shared/service/auth.service";

@Component({
  selector: 'hf-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;
  message: Message;

  constructor(private authService: AuthService, private router: Router, private userService:UserService) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails.bind(this)),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'name': new FormControl(null, [Validators.required]),
      'username': new FormControl(null, [Validators.required], this.forbiddenUsername.bind(this)),
      'agree': new FormControl(false, [Validators.requiredTrue]),
    });
  }

  onSubmit() {
    const {name, email, password, username} = this.form.value;
    const newUser = new User(email, password, name, username);
    console.log(newUser);
    this.authService.register(newUser).subscribe(response => {
      if (response.success) {
        this.router.navigate(["/login"], {
          queryParams: {nowCanLogin: true}
        })
      }
    }, error =>{

    } )
  }


  forbiddenEmails(control: FormControl):Promise<any>{
    return new Promise((resolve, reject)=>{
      this.authService.emailExists(control.value).subscribe(isTrue=>{
        if (isTrue){
          resolve({forbiddenEmail:true});
        }else{
          resolve(null);
        }
      })
    })
  }
  forbiddenUsername(control: FormControl):Promise<any>{
    return new Promise((resolve, reject)=>{
      this.authService.usernameExists(control.value).subscribe(isTrue=>{
        if (isTrue){
          resolve({forbiddenUsername:true});
        }else{
          resolve(null);
        }
      })
    })
  }
}
