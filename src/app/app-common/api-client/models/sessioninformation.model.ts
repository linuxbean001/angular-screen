import { Session } from './session.model';
import { User } from './user.model';

export interface SessionInformation {
  session: Session;
  user: User;
}
