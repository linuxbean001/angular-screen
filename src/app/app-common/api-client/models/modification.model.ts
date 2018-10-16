import { User } from './user.model';

export interface Modification {
  created: string;
  eTag: string;
  fieldName: string;
  id: number;
  newValue: string;
  oldValue: string;
  updated: string;
  version: number;
  author: User;
}
