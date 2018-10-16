import { User } from './user.model';

export interface Comment {
  body: string;
  created: string;
  eTag: string;
  id: number;
  updated: string;
  version: number;
  author: User;
}
