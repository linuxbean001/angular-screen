import { User } from './user.model';
import { DataObject } from './dataobject.model';
import { Category } from './category.model';
import { Comment } from './comment.model';
import { Customer } from './customer.model';
import { Modification } from './modification.model';
import { Priority } from './priority.model';
import { Status } from './status.model';
import { Team } from './team.model';

export interface Ticket {
  alarm: string;
  body: string;
  created: string;
  cssClasses: string[];
  deadline: string;
  eTag: string;
  id: number;
  resolved: boolean;
  subject: string;
  updated: string;
  version: number;
  assignee: User;
  attachments: DataObject[];
  author: User;
  category: Category;
  comments: Comment[];
  customers: Customer[];
  modifications: Modification[];
  priority: Priority;
  status: Status;
  team: Team;
  watchers: User[];
}
