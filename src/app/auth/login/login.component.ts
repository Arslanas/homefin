import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../shared/service/user.service";
import {User} from "../../shared/entity/user.entity";
import {Message} from "../../shared/entity/message.entity";
import {AuthService} from "../../shared/service/auth.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {TokenStorage} from "../../shared/core/tokenStorage.util";
import {Observable} from "rxjs/Observable";
import {fadeStateTrigger} from "../../shared/animations/fade.animation";

@Component({
  selector: 'hf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations:[fadeStateTrigger]
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  message: Message;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private tokenStorage: TokenStorage,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.message = new Message('danger', '');
    this.route.queryParams.subscribe((params: Params) => {
      if (params['nowCanLogin']) {
        this.showMessage('success', 'Вы можете войти в систему');
      }
      if (params['accessDenied']){
        this.showMessage('danger', 'Введите логин и пароль')
      }
    } )
    this.form = new FormGroup({
      'username': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });

  }

  onSubmit() {
    const data = this.form.value;
    const username = data.username;
    const password = data.password;
    this.authService.login(username, password).subscribe(data => {
        if (data) {
          this.message.text = '';
          this.tokenStorage.saveToken(data.response.tokenType + ' ' + data.response.accessToken);
          localStorage.setItem('user', JSON.stringify({id: data.userId, username: username}));
          this.router.navigate(['/system', 'billing']);
        }
      }
      , error =>{
        if (error.status == 401){
          this.showMessage('danger', 'Введите правильные данные')
        }
      });
  }



  private showMessage(type: string, text: string) {
    this.message = new Message(type, text);
    setTimeout((() => this.message = new Message("danger", '')), 5000);
  }
}
