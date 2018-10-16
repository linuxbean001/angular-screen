import { Team } from './team.model';

export interface Customer {
  created: string;
  dayOfBirth: string;
  eTag: string;
  firstName: string;
  id: number;
  lastName: string;
  mobilePhone: string;
  notes: string;
  privateAddress: string;
  privateMail: string;
  privatePhone: string;
  updated: string;
  version: number;
  workAddress: string;
  workMail: string;
  workPhone: string;
  team: Team;
}
