import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../../../app-common/api-client';
import { HttpResponse } from '@angular/common/http';
import { User } from '../../../app-common/api-client/models/user.model';
import { UserService } from '../../../app-common/user.service';
import { PasswordChangeRequest } from '../../../app-common/api-client/models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public loading = false;
  public user: User = null;
  public oldPassword = '';
  public password1 = '';
  public password2 = '';

  constructor(private apiClientService: ApiClientService,
              private userService: UserService) { }

  ngOnInit() {
    this.fetchUser();
  }

  /**
   * Fetches the currently logged in user
   */
  private fetchUser() {
    this.loading = true;
    this.userService.currentUser.subscribe((user: User) => {
      this.apiClientService.getUser(user.id).subscribe((res: HttpResponse<User>) => {
        console.log('Fetched User:', res.body);
        this.user = res.body;
        this.loading = false;
      });
    });
  }

  /**
   * Saves the user information
   */
  public updateUser() {
    this.loading = true;
    this.apiClientService.overwriteUser(this.user.id, this.user).subscribe((res) => {
      console.log('Updated User', res.body);
      this.user = res.body;
      this.loading = false;

      // Fetch session to make sure new data is correct in other places of the application
      this.userService.fetchSession();
    });
  }

  /**
   * Updates the users password
   */
  public updatePassword() {
    this.loading = true;
    if (this.password1 === this.password2) {
      const passwordChangeRequest: PasswordChangeRequest = {
        newPassword: this.password1,
        oldPassword: this.oldPassword,
        userId: this.user.id
      };
      this.apiClientService.updatePassword(passwordChangeRequest).subscribe((res) => {
        console.log('Updated password', res);
        this.loading = false;
      });
    }
  }

}
