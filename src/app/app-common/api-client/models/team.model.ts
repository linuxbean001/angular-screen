import { Category } from './category.model';
import { Priority } from './priority.model';
import { Status } from './status.model';
import { User } from './user.model';

export interface Team {
  created: string;
  eTag: string;
  id: number;
  name: string;
  updated: string;
  version: number;
  categories: Category[];
  defaultCategory: Category;
  defaultPriority: Priority;
  defaultStatus: Status;
  members: User[];
  owner: User;
  priorities: Priority[];
  status: Status[];
}
