import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../app-common/user.service';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public error = false;
  public inProgress = false;
  public username = '';
  public password = '';

  constructor(private router: Router,
              private userService: UserService) { }

  ngOnInit() {
  }

  public doLogin() {
    this.inProgress = true;
    this.router.navigate(['/dashboard']);
    this.userService.login(this.username, this.password).subscribe(() => {
      this.router.navigate(['/dashboard']);
    }, (err) => {
      this.inProgress = false;
      this.error = true;
    });
  }

}
