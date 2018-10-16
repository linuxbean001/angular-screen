import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FieldModification, Operation, Team, User } from '../../../app-common/api-client/models';
import { ApiClientService } from '../../../app-common/api-client';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { MatDialog } from '@angular/material';
import { SelectUserComponent } from './select-user/select-user.component';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  public editMode = false;
  public addModelOpen = false;
  public users: User[] = [];
  public team: Team = null;
  private modifications: FieldModification[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private apiClientService: ApiClientService,
              private dialog: MatDialog) { }

  ngOnInit() {
    // Read team-id from url and fetch assigned team
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params['teamId']) {
        this.editMode = true;
        this.apiClientService.getTeam(params['teamId']).subscribe((res: HttpResponse<Team>) => {
          console.log('Fetched Team', res.body);
          this.team = res.body;
        });
      } else {
        this.team = <Team>{
          name: '',
          members: []
        };
      }
    });

    // Fetch list of users
    this.fetchUsers();
  }

  /**
   * Fetches the complete list of existing users
   */
  private fetchUsers(): void {
    this.apiClientService.getAllUsers().subscribe((res: HttpResponse<User[]>) => {
      console.log('Fetched Users', res.body);
      this.users = res.body;
    });
  }

  /**
   * Opens a dialog to select a member to be added
   */
  public openAddMember(): void {
    const dialogRef = this.dialog.open(SelectUserComponent, {
      width: '500px',
      data: { users: this.users }
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.addMember(res);
      }
    });
  }

  /**
   * Adds the provided member to the list of members
   *
   * @param {User} member
   */
  public addMember(member: User): void {
    // Update list of members
    const existingIds = this.team.members.map(m => m.id);
    if (existingIds.indexOf(member.id) === -1) {
      this.team.members.push(member);
    }

    // Update list of modifications
    for (const m of this.modifications) {
      if (m.fieldName === 'members' && m.operation === Operation.REMOVE && m.value.id === member.id) {
        this.modifications.splice(this.modifications.indexOf(m), 1);
        return;
      }
    }
    this.modifications.push({
      fieldName: 'members',
      operation: Operation.APPEND,
      value: member
    });
  }

  /**
   * Removes the provided member from the list of members
   *
   * @param {User} member
   */
  public removeMember(member: User): void {

    // Update list of members
    const existingIds = this.team.members.map(m => m.id);
    const existingIndex = existingIds.indexOf(member.id);
    if (existingIndex > -1) {
      this.team.members.splice(existingIndex, 1);
    }

    // Update list of modifications
    for (const m of this.modifications) {
      if (m.fieldName === 'members' && m.operation === Operation.APPEND && m.value.id === member.id) {
        this.modifications.splice(this.modifications.indexOf(m), 1);
        return;
      }
    }
    this.modifications.push({
      fieldName: 'members',
      operation: Operation.REMOVE,
      value: member
    });
  }

  /**
   * Saves the current team by either storing the existing team or creating a new one
   */
  public saveTeam() {
    console.log('Saving team:', this.team, this.modifications);
    let observable: Observable<any>;
    if (this.editMode) {
      const modifications: FieldModification[] = this.modifications.concat([{
        fieldName: 'name',
        operation: Operation.REPLACE,
        value: this.team.name
      }]);
      observable = this.apiClientService.patchTeam(this.team.id, modifications);
    } else {
      observable = this.apiClientService.createTeam(this.team);
    }

    observable.subscribe((res) => {
      console.log('Saved team', res.body);
      this.router.navigate(['admin/teams']);
    });
  }

  /**
   * Asks for confirmation and deletes the current team
   */
  public deleteTeam() {
    if (confirm('Soll das Team wirklich gelöscht werden?')) {
      this.apiClientService.deleteTeam(this.team.id).subscribe(() => {
        console.log('Deleted team');
        this.router.navigate(['admin/teams']);
      });
    }
  }

}
