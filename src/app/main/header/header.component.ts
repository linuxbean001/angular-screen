import { Component, OnInit } from '@angular/core';
import { UserService } from '../../app-common/user.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { User } from '../../app-common/api-client/models/user.model';
import { TeamSelectionService } from '../main-common/team-selection.service';
import { Team } from '../../app-common/api-client/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService,
              private teamSelectionService: TeamSelectionService,
              private router: Router) { }

  ngOnInit() {
  }

  /**
   * Returns the list of available teams
   *
   * @returns {Observable<Team[]>}
   */
  public get teams(): Observable<Team[]> {
    return this.teamSelectionService.teams;
  }

  /**
   * Returns the currently selected team
   *
   * @returns {Observable<Team>}
   */
  public get selectedTeam(): Observable<Team> {
    return this.teamSelectionService.selectedTeam;
  }

  /**
   * Selects the provided team
   *
   * @param {Team} team
   */
  public selectTeam(team: Team): void {
    this.teamSelectionService.selectTeam(team);
  }

  /**
   * Returns the name of the currently logged in user
   * @returns {Observable<string>}
   */
  public get username(): Observable<string> {
    return this.userService.currentUser.map((user: User) => {
      if (!user) {
        return '';
      }
      return user.firstName + ' ' + user.lastName;
    });
  }

  /**
   * Logs out the user and navigates back to the login screen
   */
  public logout() {
    this.userService.logout().subscribe(() => {
      this.router.navigate(['/login']);
    });
  }

}
