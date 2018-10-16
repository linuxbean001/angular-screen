import { User } from './user.model';
import { ResourceReference } from './resourcereference.model';

export interface User {
  created: string;
  displayName: string;
  eTag: string;
  firstName: string;
  id: number;
  lastName: string;
  primaryMail: string;
  updated: string;
  version: number;
  author: User;
  image: ResourceReference;
}
