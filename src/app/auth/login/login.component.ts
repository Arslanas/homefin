import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../shared/service/user.service";
import {User} from "../../shared/entity/user.entity";
import {Message} from "../../shared/entity/message.entity";
import {AuthService} from "../../shared/service/auth.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'hf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  message: Message;

  constructor(
    private userService: UserService,
    private authService:AuthService,
    private router:Router,
    private route:ActivatedRoute
    ){}

  ngOnInit() {
    this.message = new Message('danger', '');
    this.route.queryParams.subscribe((params: Params)=>{
      if(params['nowCanLogin']){
        this.showMessage('success', 'Вы можете войти в систему');
      }
    })
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });

  }
  onSubmit(){
    const data = this.form.value;
    this.userService.getUserByEmail(data.email).subscribe((user:User)=>{
      if (user){
        if(user.password === data.password){
          window.localStorage.setItem("user", JSON.stringify(user));
          this.authService.login();
          this.message.text = '';
          this.router.navigate(['/system', 'billing']);
        } else{
          this.showMessage("danger", "Пароль не верный");
        }
      }else {
        this.showMessage("danger", "Такого пользователя не существует")
      }
    });
  }
  private showMessage(type:string, text:string){
    this.message = new Message(type, text);
    setTimeout((()=>this.message = new Message("danger", '')),5000)
  }
}
