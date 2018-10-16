import { User } from './user.model';

export interface Invitation {
  accepted: string;
  created: string;
  eTag: string;
  expires: string;
  id: number;
  key: string;
  secret: string;
  updated: string;
  version: number;
  author: User;
  user: User;
}
