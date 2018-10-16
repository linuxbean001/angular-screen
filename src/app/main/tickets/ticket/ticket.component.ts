import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {
  Category,
  FieldModification,
  Operation,
  Priority,
  Status,
  Team,
  Ticket
} from '../../../app-common/api-client/models';
import { ApiClientService } from '../../../app-common/api-client';
import { HttpResponse } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/buffer';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/skip';
import { TeamSelectionService } from '../../main-common/team-selection.service';
import _ from 'lodash';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit, OnDestroy {

  public ticket: Ticket = null;
  public team: Team = null;
  public modificationQueue: Subject<FieldModification> = new Subject<FieldModification>();
  public triggerSave: Subject<void> = new Subject<void>();
  public saveInProgress = false;
  private destroyed: Subject<boolean> = new Subject<boolean>();

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private apiClientService: ApiClientService,
              private teamSelectionService: TeamSelectionService) { }

  ngOnInit() {

    // Fetch the current team and the ticket identified by the url
    this.teamSelectionService.selectedTeam
      .first(t => !!t)
      .do((team: Team) => this.team = team)
      .mergeMap(() => this.activatedRoute.params)
      .filter((params: Params) => !!params['ticketId'])
      .mergeMap((params: Params) => this.apiClientService.getTicket(params['ticketId']))
      .subscribe((res: HttpResponse<Ticket>) => {
        console.log('Fetched Ticket', res.body);
        this.ticket = res.body;

        // Assign correct object references
        const priorities: Priority[] = this.team.priorities;
        const categories: Category[] = this.team.categories;
        const status: Status[] = this.team.status;
        this.ticket.priority = _.find(priorities, {id: this.ticket.priority.id});
        this.ticket.category = _.find(categories, {id: this.ticket.category.id});
        this.ticket.status = _.find(status, {id: this.ticket.status.id});
    });

    // Redirect to tickets page when the team selection changes
    this.teamSelectionService.selectedTeam.skip(1).takeUntil(this.destroyed).subscribe(() => {
      this.router.navigate(['tickets']);
    });

    // Listen on modification queue and save it to the backend
    this.modificationQueue.subscribe(() => this.triggerSave.next());
    const trigger = this.triggerSave.skipWhile(() => this.saveInProgress).debounceTime(1000);
    this.modificationQueue
      .buffer(trigger)
      .filter(ms => ms.length > 0)
      .subscribe((modifications: FieldModification[]) => {

      this.saveInProgress = true;

      // Remove modifications that change the same attribute
      modifications = modifications.reverse();
      const prevFieldNames = [];
      modifications = modifications.filter((modification: FieldModification) => {
        if (prevFieldNames.indexOf(modification.fieldName) > -1) {
          return false;
        } else {
          prevFieldNames.push(modification.fieldName);
          return true;
        }
      });

      // Perform request
      console.log('Saving ticket attributes: ', modifications);
      this.apiClientService.patchTicket(this.ticket.id, modifications).subscribe(() => {
        console.log('Saved');
        this.triggerSave.next();
      });
    });
  }

  ngOnDestroy() {
    this.destroyed.next(true);
  }

  /**
   * Asks for confirmation and deletes the current ticket
   */
  public deleteTicket() {
    if (confirm('Soll das Ticket wirklich gelöscht werden?')) {
      this.apiClientService.deleteTicket(this.ticket.id).subscribe(() => {
        console.log('Deleted ticket');
        this.router.navigate(['tickets']);
      });
    }
  }

  /**
   * Updates the provided attribute to the value and saves it to the backend
   *
   * @param {string} attribute
   * @param value
   */
  private saveTicketAttribute(attribute: string, value: any) {
    // Save the value itself
    this.ticket[attribute] = value;

    // Add a modification to the queue
    const modification: FieldModification = {
      fieldName: attribute,
      operation: Operation.REPLACE,
      value: value
    };
    this.modificationQueue.next(modification);
  }

}
