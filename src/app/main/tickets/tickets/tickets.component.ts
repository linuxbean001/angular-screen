import { Component, OnDestroy, OnInit } from '@angular/core';
import { Team, Ticket } from '../../../app-common/api-client/models';
import { ApiClientService } from '../../../app-common/api-client/index';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { TicketCreateDialogComponent } from '../ticket-create-dialog/ticket-create-dialog.component';
import { TeamSelectionService } from '../../main-common/team-selection.service';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit, OnDestroy {

  public destroyed: Subject<boolean> = new Subject<boolean>();
  public tickets: Ticket[] = [];
  private team: Team;

  constructor(private activatedRoute: ActivatedRoute,
              private apiClientService: ApiClientService,
              private teamSelectionService: TeamSelectionService,
              private router: Router,
              private dialog: MatDialog) { }

  ngOnInit() {
    // Read the team and fetch the assigned tickets
    this.teamSelectionService.selectedTeam
      .filter(t => !!t)
      .takeUntil(this.destroyed)
      .subscribe((selectedTeam: Team) => {
        this.team = selectedTeam;
      this.fetchTickets();
    });
  }

  ngOnDestroy() {
    this.destroyed.next(true);
  }

  /**
   * Fetches all tickets from the backend
   */
  private fetchTickets(): void {
    this.apiClientService.filterTickets(this.team.id).subscribe((res: HttpResponse<Ticket[]>) => {
      console.log('Fetched Tickets', res.body);
      this.tickets = res.body;
    });
  }

  /**
   * Opens a dialog to create a new ticket
   */
  public createTicket(): void {
    this.dialog.open(TicketCreateDialogComponent, {
      width: '600px'
    });
  }

  /**
   * Navigates to the edit ticket page
   *
   * @param {Ticket} ticket
   */
  public editTicket(ticket: Ticket): void {
    this.router.navigate(['tickets', 'ticket', ticket.id]);
  }

}
