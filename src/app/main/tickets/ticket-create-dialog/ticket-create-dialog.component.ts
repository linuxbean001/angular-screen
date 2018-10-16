import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../../../app-common/api-client';
import { Category, Priority, Status, Team, Ticket } from '../../../app-common/api-client/models';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material';
import { SelectUserComponent } from '../../admin/team/select-user/select-user.component';
import { TeamSelectionService } from '../../main-common/team-selection.service';
import _ from 'lodash';
import 'rxjs/add/operator/first';

@Component({
  selector: 'app-ticket-create-dialog',
  templateUrl: './ticket-create-dialog.component.html',
  styleUrls: ['./ticket-create-dialog.component.scss']
})
export class TicketCreateDialogComponent implements OnInit {

  public ticket: Ticket = <Ticket>{ subject: '' };
  public subjectError = false;
  public loading = false;
  public team: Team;

  constructor(public dialogRef: MatDialogRef<SelectUserComponent>,
              private apiClientService: ApiClientService,
              private teamSelectionService: TeamSelectionService,
              private router: Router) { }

  ngOnInit() {
    this.fetchTeam();
  }

  private fetchTeam(): void {
    this.loading = true;
    this.teamSelectionService.selectedTeam.first(t => !! t).subscribe((selectedTeam: Team) => {
      this.team = selectedTeam;

      // Set defaults
      const priorities: Priority[] = this.team.priorities;
      const categories: Category[] = this.team.categories;
      const status: Status[] = this.team.status;
      this.ticket.priority = _.find(priorities, {id: this.team.defaultPriority.id});
      this.ticket.category = _.find(categories, {id: this.team.defaultCategory.id});
      this.ticket.status = _.find(status, {id: this.team.defaultStatus.id});
      this.ticket.team = <Team>{ id: this.team.id };

      this.loading = false;
    });
  }

  /**
   * Creates a ticket and navigates to the edit page
   */
  public createTicket(): void {
    if (this.ticket.subject === '') {
      this.subjectError = true;
      return;
    }
    this.loading = true;
    this.apiClientService.createTicket(this.ticket).subscribe((res: HttpResponse<Ticket>) => {
      this.dialogRef.close();
      this.router.navigate(['tickets' , 'ticket', res.body.id]);
    });
  }

  /**
   * Closes the dialog
   */
  public cancel(): void {
    this.dialogRef.close();
  }

}
