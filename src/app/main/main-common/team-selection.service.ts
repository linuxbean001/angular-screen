import { Injectable } from '@angular/core';
import { ApiClientService } from '../../app-common/api-client';
import { HttpResponse } from '@angular/common/http';
import { Team } from '../../app-common/api-client/models';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import _ from 'lodash';
import { UserService } from '../../app-common/user.service';
import 'rxjs/add/operator/skipWhile';

@Injectable({
  providedIn: 'root'
})
export class TeamSelectionService {

  private readonly _teams: BehaviorSubject<Team[]> = new BehaviorSubject<Team[]>([]);
  public readonly teams: Observable<Team[]> = this._teams.asObservable();
  private readonly _selectedTeam: BehaviorSubject<Team> = new BehaviorSubject<Team>(null);
  public readonly selectedTeam: Observable<Team> = this._selectedTeam.asObservable();

  constructor(private apiClientService: ApiClientService,
              private userService: UserService) {
    this.userService.currentSession.skipWhile(() => !this.userService.sessionValidated).subscribe(() => {
      this.init();
    });
  }

  /**
   * Initializes the service by fetching all available teams
   */
  public init(): void {
    this.apiClientService.getAllTeams().subscribe((res: HttpResponse<Team[]>) => {
      const teams: Team[] = res.body;
      console.log('Fetched Teams', teams);

      // Set the list of teams
      this._teams.next(teams);

      // Handle the selection
      if (this._selectedTeam.getValue()) {
        // Try to keep the selection
        this.selectTeam(this._selectedTeam.getValue());
      }
      if (!this._selectedTeam.getValue() && teams.length > 0) {
        // Select the first team
        this.selectTeam(teams[0]);
      }
    });
  }

  /**
   * Marks the provided team as selected
   *
   * @param {Team} team
   */
  public selectTeam(team: Team): void {
    this._selectedTeam.next(_.find(this._teams.getValue(), { id: team.id }));
  }
}
