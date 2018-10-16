import { User } from './user.model';
import { DocumentGroup } from './documentgroup.model';
import { Team } from './team.model';

export interface Template {
  created: string;
  eTag: string;
  id: number;
  name: string;
  text: string;
  updated: string;
  version: number;
  author: User;
  groups: DocumentGroup[];
  team: Team;
}
