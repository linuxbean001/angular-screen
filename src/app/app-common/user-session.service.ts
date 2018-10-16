import { Injectable } from '@angular/core';
import { Session } from './api-client/models/session.model';

@Injectable()
export class UserSessionService {

  public session: Session;

  constructor() { }

}
