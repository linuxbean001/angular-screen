import { Component, OnInit } from '@angular/core';
import { Team } from '../../../app-common/api-client/models';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { TeamSelectionService } from '../../main-common/team-selection.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  constructor(private teamSelectionService: TeamSelectionService,
              private router: Router) { }

  ngOnInit() {
    this.teamSelectionService.init();
  }

  public get teams(): Observable<Team[]> {
    return this.teamSelectionService.teams;
  }

  /**
   * Navigates to the create team page
   */
  public createTeam(): void {
    this.router.navigate(['admin/team']);
  }

  /**
   * Navigates to the edit team page
   *
   * @param {Team} team
   */
  public editTeam(team: Team): void {
    this.router.navigate(['admin/team', team.id]);
  }

}
