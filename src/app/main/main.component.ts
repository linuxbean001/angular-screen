import { Component, OnInit } from '@angular/core';
import { UserService } from '../app-common/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    // Fetch the user when the main component loads
    if (!this.userService.sessionValidated) {
      this.userService.fetchSession();
    }
  }

}
