import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from './api-client/models/user.model';
import { ApiClientService } from './api-client';
import { HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/skipWhile';
import { Session } from './api-client/models/session.model';
import { SessionInformation } from './api-client/models/sessioninformation.model';
import { UserSessionService } from './user-session.service';

@Injectable()
export class UserService {

  public readonly sessionInformation: BehaviorSubject<SessionInformation> = new BehaviorSubject(null);
  public sessionValidated = false;
  public readonly currentUser: Observable<User>;
  public readonly currentSession: Observable<Session>;

  constructor(private apiClientService: ApiClientService, private userSessionService: UserSessionService) {

    // Build transformed observables
    this.currentUser = this.sessionInformation.map((sessionInformation: SessionInformation) => {
      return sessionInformation ? sessionInformation.user : null;
    });
    this.currentSession = this.sessionInformation.map((sessionInformation: SessionInformation) => {
      return sessionInformation ? sessionInformation.session : null;
    });

    // Update the session in UserSessionService accordingly
    this.currentSession.subscribe((currentSession: Session) => {
      this.userSessionService.session = currentSession;
    });

    // Update local storage whenever session information changes
    this.sessionInformation.skipWhile(() => !this.sessionValidated).subscribe(() => {
      this.saveSessionToLocalStorage();
    });

    // Try to immediately load session information from local storage
    this.loadSessionFromLocalStorage();
  }

  /**
   * Logs in the user with the provided credentials
   *
   * @param {string} username
   * @param {string} password
   * @returns {Observable<boolean>}
   */
  public login(username: string, password: string): Observable<boolean> {
    const credentials = {
      login: username,
      password: password
    };
    return this.apiClientService.openSession(credentials).map((res: HttpResponse<SessionInformation>) => {
      if (res.ok) {
        this.sessionValidated = true;
        this.sessionInformation.next(res.body);
      }
      return res.ok;
    });
  }

  /**
   * Logs out the current user
   *
   * @returns {Observable<boolean>}
   */
  public logout(): Observable<boolean> {
    return this.apiClientService.closeSession()
      .map((res: HttpResponse<any>) => {
      return res.ok;
    });
  }

  /**
   * Fetches the current session without providing credentials
   *
   * @returns {Observable<boolean>}
   */
  public fetchSession(): void {
    this.apiClientService.getSession()
      .subscribe((res: HttpResponse<SessionInformation>) => {
      if (res.ok) {
        this.sessionValidated = true;
        this.sessionInformation.next(res.body);
      }
    });
  }

  /**
   * Tries to load session information from local storage
   */
  private loadSessionFromLocalStorage(): void {
    if (localStorage) {
      const sessionStr = localStorage.getItem('session');
      const session = sessionStr ? JSON.parse(sessionStr) : null;
      if (session) {
        this.sessionInformation.next(session);
      }
    }
  }

  /**
   * Saves the current session information to local storage
   */
  private saveSessionToLocalStorage(): void {
    if (localStorage) {
      const session = JSON.stringify(this.sessionInformation.getValue());
      localStorage.setItem('session', session);
    }
  }

}
